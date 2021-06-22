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
            def testConfigMapKeyValues = "testConfigMapKeyVal"
            def testProjectDisplayName = "bdso-test"
            def testTemplateName = "${artifactFilePath}templates/openshift/testing-template.yaml"
			
			def gkeTestingServiceTemplate = 'templates/kubernetes/test-svc-template.json'
            def gkeTestingDeploymentTemplate = 'templates/kubernetes/test-deployment-template.json'
            def gkeTestingIngressTemplate = 'templates/kubernetes/test-ingress-template.json'
			
			def kubernetesClusterCredentials = "integrated-ml-apis-secret" 
			def kubernetesClusterServiceAccount = "jenkins@integrated-ml-apis.iam.gserviceaccount.com"    
			def kubernetesClusterName   = "my-jenkins-cluster"
			def kubernetesClusterRegion = "us-central1"
			def kubernetesClusterProjectName = "integrated-ml-apis"


            def oc = 'oc'
            def openShiftHost = "https://api.rhopenshift-dev.aceinfocoe.com:6443"
            def openShiftCredential = "openshift-dev-token"
            def osConfigMapName = "${projectTagName}-config-map"

            def route = '/'
			def osurl = ""
            def gkeurl = """http://${projectTagName}-${testProjectName}.kubeapps.aceinfosolutions.com${route}"""  
			
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

            stage ("Publish Reports") {
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
                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD'],
                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
                    string(credentialsId: testConfigMapKeyValues, variable: 'TEST_CONFIG'),
					string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
                    ]) {

					parallel (
					Openshift: {
                        sh """
                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN}
                        """
                        try {
                            sh """
                                ${oc} project ${testProjectName}
                            """         
                        } catch (Exception e) {
                            sh """
                                ${oc} new-project ${testProjectName} --display-name="${testProjectDisplayName}"
                                ${oc} secrets new-dockercfg "nexus-${testProjectName}" --docker-server=${nexusRegistryURL}/${nexusRepoUser} --docker-username=${env.NEXUS_USERNAME} --docker-password=${env.NEXUS_PASSWORD} --docker-email=${nexusEmail}
                                ${oc} secrets link default "nexus-${testProjectName}" --for=pull
                                ${oc} secrets link builder "nexus-${testProjectName}" --for=pull
                                ${oc} secrets link deployer "nexus-${testProjectName}" --for=pull
                            """                
                        }
                        try {
                            sh """
                                ${oc} create configmap ${osConfigMapName} $TEST_CONFIG
                            """         
                        } catch (Exception e) {
                        }

                        sh """
                            ${oc} process -f ${testTemplateName} | ${oc} apply -f - -n ${testProjectName}
                            ${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${testProjectName}/${projectTagName}-is:${dockerImageVersion} --insecure
                            sleep 5
                            ${oc} import-image ${projectTagName}-is:${dockerImageVersion} --confirm --insecure | grep -i "imported"
                            sleep 45
                        """
                    },
					
					GKE: {
					sleep 60
			       	dir("${env.WORKSPACE}${filepath}") {
			       		writeFile file: 'apitokenfile.json', text: APITOKEN
						sh """
						    gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
						    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
						    kubectl apply -f ${gkeTestingServiceTemplate}
							kubectl apply -f ${gkeTestingDeploymentTemplate}
							kubectl apply -f ${gkeTestingIngressTemplate}
							rm -rf apitokenfile.json
						"""
			        }
					}
				)
				
			}
					
					
					
					
					
            }
			
            
                     
            
            
            stage('Health Check') {
			
			parallel (
				Openshift: {
				withCredentials([
                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN')
				]) {
               def retstat = 1
			                timeout (time: 5, unit: 'MINUTES') {
			                  for (;retstat != 0;) {
			                    retstat = sh(
			                    script: """
			                    ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
			                    ${oc} project ${testProjectName}
			                    curl -I -k "https://`${oc} get route ${projectTagName} -n ${testProjectName} -o jsonpath='{ .spec.host }'`${route}" | grep "HTTP/1.1 20*" """, returnStatus: true)
			                    if (retstat != 0) {
			                      sleep 10
			                    }
			                  }
			                }
			                if (retstat != 0) {
			                  echo "Health check to https://`${oc} get route ${projectTagName} -n ${testProjectName} -o jsonpath='{ .spec.host }'`${route} failed."
			                  sh exit ${retstat}
			                }
				}
				},
				
				GKE:  {
				sleep 45
				 def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "${gkeurl}" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Health check to ${gkeurl} failed."""
                  sh exit ${retstat}
                } 
				
				}

					)				
            }  

            stage('Functional Testing (Protractor)') {
                 withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: adminCredentials, usernameVariable: 'ADMIN_USERNAME', passwordVariable: 'ADMIN_PASSWORD']]) {
                        dir("${env.WORKSPACE}${filepath}") {
                            sh """
                                ./gradlew protractor
                            """
							
							
                                              
                        }
                    }
					publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'build/reports/html', reportFiles: 'ProtractorTestReport.html', reportName: 'ProtractorTestReport', reportTitles: ''])
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
 