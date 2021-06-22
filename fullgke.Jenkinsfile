node('master') {
    try {
        currentBuild.displayName = "${env.BUILD_NUMBER}-BDSO-WebApp(CI/CD)"
        wrap([$class: 'BuildUser']) {
            def gitUrl = 'https://github.com/AceInfoSolutions/CoETechTraining-Web'
            def gitCredentialId = 'githubCredentialId'
            
           def nexusRegistryURL = 'nexus.aceinfosolutions.com:8441'
            def nexusRepoUser	=	'aceinfocoe'
            def nexusCredentialId = 'AceInfoCoECreds'
            def nexusEmail = '0c9bce5f-0d20-46ab-a8a3-5fcf17af84d0'

            def dockerImageVersion = '1.0.0'
            
            def sonarQubeURL = 'http://sonar.aceinfosolutions.com:9000'
            def sonarQubeToken = 'sonarQubeToken'
            def sonarQubeSCMDisabled = 'true'
            def sonarQubeForceAuthentication = "true"
            
            def anchoreEngineURL = 'http://anchore.aceinfosolutions.com:8228/v1'
            
            def filepath = "/"
            def artifactFilePath = ""

            def projectTagName = "webapp"   

            def testProjectName = "bdso-test"
            def testingServiceTemplate = 'templates/kubernetes/test-svc-template.json'
            def testingDeploymentTemplate = 'templates/kubernetes/test-deployment-template.json'
            def testingIngressTemplate = 'templates/kubernetes/test-ingress-template.json'

			def stageProjectName = "bdso-stage"
            def stageServiceTemplate = 'templates/kubernetes/stage-svc-template.json'
            def stageDeploymentTemplate = 'templates/kubernetes/stage-deployment-template.json'
            def stageIngressTemplate = 'templates/kubernetes/stage-ingress-template.json'

			def prodProjectName = "bdso-prod"
            def prodServiceTemplate = 'templates/kubernetes/prod-svc-template.json'
            def prodDeploymentTemplate = 'templates/kubernetes/prod-deployment-template.json'
            def prodIngressTemplate = 'templates/kubernetes/prod-ingress-template.json'


			def kubernetesClusterCredentials = "integrated-ml-apis-secret" 
			def kubernetesClusterServiceAccount = "jenkins@integrated-ml-apis.iam.gserviceaccount.com"    
			def kubernetesClusterName   = "my-jenkins-cluster"
			def kubernetesClusterRegion = "us-central1"
			def kubernetesClusterProjectName = "integrated-ml-apis"

            def route = '/'
            def osurl = """http://${projectTagName}-${testProjectName}.kubeapps.aceinfosolutions.com${route}"""  
			
			def adminCredentials = 'adminCredentials';

			def apigeeTestURL = "rduriseti-eval-test.apigee.net"
			def apigeeProdURL = "rduriseti-eval-prod.apigee.net"
            def apigeeAPIKeyCredentials = "apigeeAPIKey"
            def apigeeAuthCredentials = "apigeeBasicAuthorizationKey"

			def green = "a"
  			def blue = "b"
  			def userInput
  			def blueWeight
  			def greenWeight
  			def canaryDeployment = false
            
            stage ('Prepare Workspace') {
                notifyStarted()
                checkout([$class: 'GitSCM',
                    branches: [[name: 'test']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[credentialsId: gitCredentialId, url: gitUrl]],  poll: true
                ])
                dir("${env.WORKSPACE}${filepath}") {
                    sh """
                    	cd src/dev/resources
                    	npm install
                    	cd ../../..
                        chmod +x gradlew
                        ./gradlew clean
                    """
                }   
            }
            
            stage('Build') {
                dir("${env.WORKSPACE}${filepath}") {
                    sh """
                        ./gradlew build -x test -x check
                    """
                }
            }

            stage('Unit Testing') {
                dir("${env.WORKSPACE}${filepath}") {
                    sh """
                        ./gradlew test
                    """
                }
            }

            stage('Code Analysis (findBugs)') {
                dir("${env.WORKSPACE}${filepath}") {
                    sh """
                        ./gradlew check findbugsMain findbugsTest
                    """
                }
            }

            stage('Code Coverage (JaCoCo)') {
			 dir("${env.WORKSPACE}${filepath}") {
                    sh """
                        ./gradlew jacocoTestCoverageVerification jacocoTestReport
                    """
                }
            }

            stage('Code Security (SonarQube)') {
		        withCredentials([string(credentialsId: sonarQubeToken, variable: 'TOKEN')]) {
	                    dir("${env.WORKSPACE}${filepath}") {
		                sh """
		                    ./gradlew sonarqube -Dsonar.host.url=${sonarQubeURL}  -Dsonar.login=$TOKEN -Dsonar.scm.disabled=${sonarQubeSCMDisabled} -Dsonar.forceAuthentication=${sonarQubeForceAuthentication}
		                """
	                    }
		        }
            }
            
                       
            stage ('Containerize (Docker)') {
                dir("${env.WORKSPACE}${filepath}") {
                    sh """
                        ./gradlew buildDocker --stacktrace
                    """
                }
            }

             stage('Publish Image') {
                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD']
                ]) {
                    dir("${env.WORKSPACE}${filepath}") {
                        sh """
                            docker login ${nexusRegistryURL} --username ${env.NEXUS_USERNAME} --password ${env.NEXUS_PASSWORD}
                            docker image tag ${env.NEXUS_USERNAME}/${projectTagName}:${dockerImageVersion} ${nexusRegistryURL}/${env.NEXUS_USERNAME}/${projectTagName}:${dockerImageVersion}
                            docker push ${nexusRegistryURL}/${env.NEXUS_USERNAME}/${projectTagName}:${dockerImageVersion}
                            docker rmi ${env.NEXUS_USERNAME}/${projectTagName}:${dockerImageVersion}
                        """
                    }
                }
            }
            
			stage ('Container Security (Anchore)') {
                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD']
                ]) {
                    dir("${env.WORKSPACE}${filepath}") {
                        sh """ echo "${nexusRegistryURL}/${env.NEXUS_USERNAME}/${projectTagName}:${dockerImageVersion} ./src/main/docker/Dockerfile" > imageFileList """
                        anchore bailOnFail: false, bailOnPluginFail: false, engineCredentialsId: 'AnchoreEngineCredentials', engineurl: 'http://anchore.aceinfosolutions.com:8228/v1', name: 'imageFileList'            
                    }
                }
            }

            stage("Publish Reports") {
                archiveArtifacts artifacts: "${artifactFilePath}build/libs/*.jar", onlyIfSuccessful: true
                archiveArtifacts artifacts: "${artifactFilePath}build/test-results/**/*", onlyIfSuccessful: false
                archiveArtifacts artifacts: "${artifactFilePath}build/reports/**/*", onlyIfSuccessful: false
                archiveArtifacts artifacts: "${artifactFilePath}build/findbugs/*", onlyIfSuccessful: false
                archiveArtifacts artifacts: "${artifactFilePath}build/jacoco/*", onlyIfSuccessful: false
                step([$class: 'JUnitResultArchiver', testResults: "${artifactFilePath}build/test-results/test/TEST-*.xml"])  
                step([$class:'FindBugsPublisher', canComputeNew:false, pattern:"${artifactFilePath}**/findbugs/*.xml"])
                jacoco buildOverBuild: true, changeBuildStatus: true, execPattern: "${artifactFilePath}build/jacoco/test.exec"
				
            }
            
            stage ('Rolling Deployment (Test Env)') {
				withCredentials([string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')]) {
			       	dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
						sh """
						    gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
						    kubectl apply -f ${testingServiceTemplate}
							kubectl apply -f ${testingDeploymentTemplate}
							kubectl apply -f ${testingIngressTemplate}
							rm -rf apitokenfile.json
						"""
			       }
			   }
	        }
            
                     
            
            
            stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "${osurl}" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Health check to ${osurl} failed."""
                  sh exit ${retstat}
                }               
            } 

            stage('Functional Testing (Protractor)') {
                 withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: adminCredentials, usernameVariable: 'ADMIN_USERNAME', passwordVariable: 'ADMIN_PASSWORD']]) {
                        dir("${env.WORKSPACE}${filepath}") {
                            sh """
                                sleep 30
                            """
							
							
                                              
                        }
                    }
            }   
            
           stage ('Staging Deployment') {
				withCredentials(
                    [string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')]) {
					dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
                        sh """
                            gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
						    kubectl apply -f ${stageServiceTemplate}
							kubectl apply -f ${stageDeploymentTemplate}
							kubectl apply -f ${stageIngressTemplate}
							rm -rf apitokenfile.json
                        """
                    }
         	
					}
			}
			
         	 stage ('Zero Downtime Deployment (ZDD)') {
                withCredentials(
                    [string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')]) {
					dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
                        sh """
                            gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
						    kubectl apply -f ${prodServiceTemplate}
							kubectl apply -f ${prodDeploymentTemplate}
							kubectl apply -f ${prodIngressTemplate}
							rm -rf apitokenfile.json
                        """
                    }
					
					stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "${gkeurlprod}" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Health check to ${osurl} failed."""
                  sh exit ${retstat}
                }               
            }
         	
					}
				userInput = input(
		        id: 'userInput', message: 'Canary or Rolling deployment?', parameters: [
		        	[$class: 'ChoiceParameterDefinition', choices: 'ZDD Canary deployment\nZDD Rolling Deployment', description: 'ZDD Canary Deployment or ZDD Rolling Deployment', name: 'DEPLOYMENT_TYPE'],
		        ])
	       			
	       			if (userInput != "ZDD Rolling Deployment") {
						canaryDeployment = "true"
        			}
      			
			}
				if (canaryDeployment) {
	      		stage ('ZDD Canary Deployment') {
	        		userInput = input(
	         			id: 'userInput', message: 'ZDD Canary Deployment?', parameters: [
	            		[$class: 'StringParameterDefinition', defaultValue: '25', description: 'New deployment weight', name: 'NEW_DEPLOYMENT_WEIGHT'],
	            		[$class: 'StringParameterDefinition', defaultValue: '75', description: 'Existing deployment weight', name: 'EXISTING_DEPLOYMENT_WEIGHT'],
	           		])
	        		blueWeight = userInput['EXISTING_DEPLOYMENT_WEIGHT']
	        		greenWeight = userInput['NEW_DEPLOYMENT_WEIGHT']
	        		withCredentials(
                    [string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
                    ]) {
						dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
	          			sh """
           					 gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
							kubectl --namespace=canary annotate --overwrite -f ${prodIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=${greenWeight} || true
							rm -rf apitokenfile.json
							
	          			"""
	        		}
	      		}
				}
	      		
				stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "${gkeurlprod}" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Health check to ${osurl} failed."""
                  sh exit ${retstat}
                }               
            }
	      		
	      		stage ('Production ZDD Go Live or Rollback') {
			        userInput = input(
			           id: 'userInput', message: 'ZDD Go Live or ZDD Rollback?', parameters: [
			            [$class: 'ChoiceParameterDefinition', choices: 'ZDD Go Live\nZDD Rollback', description: 'ZDD Go Live to new deployment or ZDD Rollback to existing deployment', name: 'GO_LIVE_OR_ROLLBACK'],
			           ])
					withCredentials([
					string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN') ])
					{
						dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
			        	sh """
			         		gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
			         	"""
			          	if (userInput == "ZDD Rollback") {
				            sh """
				           		kubectl --namespace=canary annotate --overwrite -f ${prodIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=0 || true
								rm -rf apitokenfile.json
 							"""              
			          	} else {
			            	sh """
							kubectl --namespace=canary annotate --overwrite -f ${prodIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=100 || true
							rm -rf apitokenfile.json
				            """                            
							}
						}
				}
		      }
      		}
      		else {
      			stage ('ZDD Rolling Deployment') {
				withCredentials([string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')]) {
			       	dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
						sh """
						    gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
						    kubectl --namespace=canary annotate --overwrite -f ${prodIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=100 || true
							command || true
							rm -rf apitokenfile.json
						"""
			       }
			   }
		         	
				}				
      		}
      		
      		stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "${gkeurlprod}" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Health check to ${osurl} failed."""
                  sh exit ${retstat}
                }               
            }                             
        }
        notifySuccessful()
    } catch (e) {
       currentBuild.result = "FAILED"
       notifyFailed()
        throw e
    }
}

def notifyStarted() {
    //slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
}
def notifySuccessful() {
    //slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
}
def notifyFailed() {
    //slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
} 
 