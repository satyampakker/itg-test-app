import groovy.json.JsonOutput
node('master') {
    try {
        currentBuild.displayName = "${env.BUILD_NUMBER}CoE-WebApp(CI/CD)"
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

            // Openshift 
            def oc = 'oc'
            def openShiftHost = "https://api.openshift-dev.aceinfocoe.com:6443"
            def openShiftCredential = "openshift-dev-token"
            def osConfigMapName = "${projectTagName}-config-map"


            def testProjectName = "coe-test"
            def testConfigMapKeyValues = "testConfigMapKeyVal"
            def testProjectDisplayName = "coe-test"
            def testTemplateName = "${artifactFilePath}templates/openshift/testing-template.yaml"
            def gkeTestServiceTemplate = 'templates/kubernetes/test-svc-template.json'
            def gkeTestDeploymentTemplate = 'templates/kubernetes/test-deployment-template.json'
            def gkeTestIngressTemplate = 'templates/kubernetes/test-ingress-template.json'

	    	def stageProjectName = "coe-stag"
	    	def stageConfigMapKeyValues = "testConfigMapKeyVal"
	    	def stageProjectDisplayName = "coe-stag"
	    	def stageTemplateName = "${artifactFilePath}templates/openshift/staging-template.yaml"
            def gkeStageServiceTemplate = 'templates/kubernetes/stage-svc-template.json'
            def gkeStageDeploymentTemplate = 'templates/kubernetes/stage-deployment-template.json'
            def gkeStageIngressTemplate = 'templates/kubernetes/stage-ingress-template.json'


	    	def prodProjectName = "coe-prod"
	    	def prodConfigMapKeyValues = "testConfigMapKeyVal"
	    	def prodProjectDisplayName = "coe-prod"
	    	def prodTemplateName = "${artifactFilePath}templates/openshift/production-template.yaml"
            def gkeProdServiceTemplate = 'templates/kubernetes/prod-svc-template.json'
            def gkeProdDeploymentTemplate = 'templates/kubernetes/prod-deployment-template.json'
            def gkeProdAIngressTemplate = 'templates/kubernetes/prod-a-ingress-template.json'
            def gkeProdBIngressTemplate = 'templates/kubernetes/prod-b-ingress-template.json'

			// Google Kubernetes Engine
			def kubernetesClusterCredentials = "integrated-ml-apis-secret" 
			def kubernetesClusterServiceAccount = "jenkins@integrated-ml-apis.iam.gserviceaccount.com"    
			def kubernetesClusterName   = "my-jenkins-cluster"
			def kubernetesClusterRegion = "us-central1"
			def kubernetesClusterProjectName = "integrated-ml-apis"

            def route = '/'
            def osurl = ""  
			
			def adminCredentials = 'adminCredentials';

			def apigeeTestURL = "rduriseti-eval-test.apigee.net"
			def apigeeProdURL = "rduriseti-eval-prod.apigee.net"
            def apigeeAPIKeyCredentials = "apigeeAPIKey"
            def apigeeAuthCredentials = "apigeeBasicAuthorizationKey"

			def userInput
			def userInputgke
  	    	
  	    	def canaryDeployment = false
  	    	
            def blue = "b"
  	    	def blueWeight

	    	def green = "a"
  	    	def greenWeight
			
				def data = [
                    appurls:[
                        [
                            target: "Google Kubernetes Engine",
                            environments  :[
                                [
                                    value: "test",
                                    url: "",
                                ],
                                [
                                    value: "stage",
                                    url: "",
                                ],
                                [
                                    value: "prod",
                                    url: "",
                                ]
                            ]
                        ]
                    ]
                ]
				
            def testApplicationURL
            def stageApplicationURL
            def prodApplicationURL


            def gkeVariable = 'production'
            
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

            
             stage ('Rolling Deployment (Test Env)') {
                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD'],
                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
                    string(credentialsId: testConfigMapKeyValues, variable: 'TEST_CONFIG'),
                    string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
                    ]) {
                    parallel (
                    	OpenShift: {
							sleep 15                    	
	                        sh """
	                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
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
	                        """
	                    }
	                )
                    }
            }
            
            stage('Health Check') {
            	parallel (
					OpenShift: {
						withCredentials([
	                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN')
	                    ]) {
							sleep 30	                    	
	                    	sh """
	                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
	                        """
			                def retstat = 1
			                timeout (time: 15, unit: 'MINUTES') {
			                  for (;retstat != 0;) {
			                    retstat = sh(
			                    script: """
			                    curl -I -k "https://`${oc} get route ${projectTagName} -n ${testProjectName} -o jsonpath='{ .spec.host }'`${route}" | grep "HTTP/1.1 20*" """, returnStatus: true)
			                    if (retstat != 0) {
			                      sleep 30
			                    }
			                  }
			                }
			                if (retstat != 0) {
			                  echo "Health check to https://`${oc} get route ${projectTagName} -n ${testProjectName} -o jsonpath='{ .spec.host }'`${route} failed."
			                  sh exit ${retstat}
			                }
			            }
		            }
	           	)
            } 
			
			stage ('Staging Deployment') {
				withCredentials([
					string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
					string(credentialsId: stageConfigMapKeyValues, variable: 'STAGE_CONFIG'),
					string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN'),
					[$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD']
				]) { 
                    parallel (
	                    OpenShift: {
							sleep 15	                    
							sh """
			                	${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
			                """
		                    try {
		                        sh """
		                            ${oc} project ${stageProjectName}
		                        """         
		                    } catch (Exception e) {
		                        sh """
		                            ${oc} new-project ${stageProjectName} --display-name="${stageProjectDisplayName}"
		                            ${oc} secrets new-dockercfg "nexus-${stageProjectName}" --docker-server=${nexusRegistryURL}/${nexusRepoUser} --docker-username=${env.NEXUS_USERNAME} --docker-password=${env.NEXUS_PASSWORD} --docker-email=${nexusEmail}
		                            ${oc} secrets link default "nexus-${stageProjectName}" --for=pull
		                            ${oc} secrets link builder "nexus-${stageProjectName}" --for=pull
		                            ${oc} secrets link deployer "nexus-${stageProjectName}" --for=pull
		                        """                
		                    }				
			                try {
		                        sh """
		                           ${oc} create configmap ${osConfigMapName} $STAGE_CONFIG
		                        """         
		                    } catch (Exception e) {}                
			                sh """
				                ${oc} process -f ${stageTemplateName} | ${oc} apply -f - -n ${stageProjectName}
		                        ${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${stageProjectName}/${projectTagName}-is:${dockerImageVersion} --insecure
			                    sleep 5
				                ${oc} import-image ${projectTagName}-is:${dockerImageVersion} --confirm --insecure | grep -i "imported"
			                """
		                }
	                )
				  }
			}
            stage('Health Check') {
            	parallel (
					OpenShift: {
						sleep 15
						withCredentials([
	                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN')
	                    ]) {
							sleep 30	                    
	                    	sh """
	                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
	                        """
			                def retstat = 1
			                timeout (time: 15, unit: 'MINUTES') {
			                  for (;retstat != 0;) {
			                    retstat = sh(
			                    script: """
			                    curl -I -k "https://`${oc} get route ${projectTagName} -n ${stageProjectName} -o jsonpath='{ .spec.host }'`${route}" | grep "HTTP/1.1 20*" """, returnStatus: true)
			                    if (retstat != 0) {
			                      sleep 30
			                    }
			                  }
			                }
			                if (retstat != 0) {
			                  echo "Health check to https://`${oc} get route ${projectTagName} -n ${stageProjectName} -o jsonpath='{ .spec.host }'`${route} failed."
			                  sh exit ${retstat}
			                }
			            }
		            }
	           	)
            } 
			
            stage ('Zero Downtime Deployment (ZDD)') {
				try{
					timeout (time: 1, unit: 'MINUTES') {
				userInput = input(
        		id: 'userInput', message: 'Rolling deployment or Canary?', parameters: [
        			[$class: 'ChoiceParameterDefinition', choices: 'ZDD Canary Deployment\nZDD Rolling Deployment', description: 'ZDD Canary Deployment or ZDD Rolling Deployment', name: 'DEPLOYMENT_TYPE'],
        		])
				}
				} catch (org.jenkinsci.plugins.workflow.steps.FlowInterruptedException e) {
					userinput = [DEPLOYMENT_TYPE:true]
				}
            
                withCredentials([
                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
                    string(credentialsId: prodConfigMapKeyValues, variable: 'PROD_CONFIG'),
                    string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN'),
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD']
                    ]) {
	                    parallel (
							OpenShift: {
								sleep 15
								sh """
				                	${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
				                """
			                    try {
			                        sh """
			                            ${oc} project ${prodProjectName}
			                        """         
			                    } catch (Exception e) {
			                        sh """
			                            ${oc} new-project ${prodProjectName} --display-name="${prodProjectDisplayName}"
			                            ${oc} secrets new-dockercfg "nexus-${prodProjectName}" --docker-server=${nexusRegistryURL}/${nexusRepoUser} --docker-username=${env.NEXUS_USERNAME} --docker-password=${env.NEXUS_PASSWORD} --docker-email=${nexusEmail}
			                            ${oc} secrets link default "nexus-${prodProjectName}" --for=pull
			                            ${oc} secrets link builder "nexus-${prodProjectName}" --for=pull
			                            ${oc} secrets link deployer "nexus-${prodProjectName}" --for=pull
			                        """  
			                    }				
		                        try {
		                        	sh """
		                           		${oc} create configmap ${osConfigMapName} $PROD_CONFIG
		                        	"""         
		                    	} catch (Exception e) {}                
		                        sh """
		                            ${oc} process -f ${prodTemplateName} | ${oc} apply -f - -n ${prodProjectName}
		                            sleep 30
		                        """
		                    	
		                    }
					    )
         	        }
					withCredentials([
                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
                    string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
                    ]) {
						def exists = fileExists 'active_service.txt'
	   					if (exists) {
							echo '##### Not a First Time Deployment #####'
							sleep 15
							sh """
								${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
		    					${oc} project ${prodProjectName}
		    					
								${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.to.name }' > active_service.txt
								cat active_service.txt
							"""
						} else {
    						echo '##### First Time Deployment #####'
    						parallel (
								OpenShift: {
									sleep 15 						
		    						sh """
		    							${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
		    							${oc} project ${prodProjectName}
		    							
		    							${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${projectTagName}-is:${dockerImageVersion} --insecure
		                            	sleep 15
		                            	${oc} import-image ${projectTagName}-is:${dockerImageVersion} --confirm --insecure | grep -i "imported"
		    							
		    							${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${green}-${projectTagName}-is:${dockerImageVersion} --insecure
		    							sleep 15
										${oc} import-image ${green}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "imported"
										
				   						${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${blue}-${projectTagName}-is:${dockerImageVersion} --insecure
				   						sleep 15
										${oc} import-image ${blue}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "imported"
										
										${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.to.name }' > active_service.txt
										cat active_service.txt
		    							sleep 15
									"""
								}
							)
						}
	    				activeService = readFile('active_service.txt').trim()
		       			if (activeService == "a-${projectTagName}-opr-svc") {
		       				blue = "a"
		       				green = "b"
		       			}
		       			
		       			if (userInput == "ZDD Canary Deployment") {
                        canaryDeployment = "true"
                    }
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
	        		withCredentials([
	          			string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
	          			string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
	        		]) {
					parallel (
						Openshift: {
							sleep 15
							sh """
								${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
								${oc} project ${prodProjectName}
							
								${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${green}-${projectTagName}-is:${dockerImageVersion} --insecure
								sleep 5
								${oc} import-image ${green}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "imported"
								sleep 5          			
								${oc} login --server=${openShiftHost} -n ${prodProjectName} --token=${OSTOKEN}
								${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${green}-${projectTagName}-opr-svc=${greenWeight} ${blue}-${projectTagName}-opr-svc=${blueWeight}
							"""
							
							},
							
						GKE: {
						sleep 60	
						userInputgke = input(
					id: 'userInputgke', message: 'Apply Canary to GKE?', parameters: [
						[$class: 'ChoiceParameterDefinition', choices: 'Accept\nDeny', description: 'Canary Deploy to GKE?', name: 'GKE_CANARY_DEPLOYMENT'],
					])
					
					if (userInputgke == "Accept") {

						echo '##### APPLYING GKE CANARY #####'
							dir("${env.WORKSPACE}${filepath}") {
								writeFile file: 'apitokenfile.json', text: APITOKEN

								if (green == "a") {
								sh """
									gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
									gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}

									kubectl --namespace=${green} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=${greenWeight} || true
									kubectl --namespace=${blue} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=${blueWeight} || true
									rm -rf apitokenfile.json
								"""
								} else {
								sh """
									gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
									gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}

									kubectl --namespace=${green} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=${greenWeight} || true
									kubectl --namespace=${blue} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=${blueWeight} || true
									rm -rf apitokenfile.json
								"""
								}

							}
						} else {
							
						echo '##### GKE CANARY NOT APPLIED #####'
						}
						}
						
						)						
					}
				}
      		    
    		
	            stage('Health Check') {
	            	parallel (
						OpenShift: {
							withCredentials([
		                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN')
		                    ]) {
								sleep 30		                    
		                    	sh """
		                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
		                        """
				                def retstat = 1
				                timeout (time: 15, unit: 'MINUTES') {
				                  for (;retstat != 0;) {
				                    retstat = sh(
				                    script: """
				                    curl -I -k "https://`${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.host }'`${route}" | grep "HTTP/1.1 20*" """, returnStatus: true)
				                    if (retstat != 0) {
				                      sleep 30
				                    }
				                  }
				                }
				                if (retstat != 0) {
				                  echo "Health check to https://`${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.host }'`${route} failed."
				                  sh exit ${retstat}
				                }
				            }
			            },
		            	GKE: {
	            		def gkeURL = """https://${projectTagName}-${prodProjectName}.kubeapps.aceinfosolutions.com${route}"""
		                def retstat = 1
		                timeout (time: 5, unit: 'MINUTES') {
		                  for (;retstat != 0;) {
		                    retstat = sh(script: """ curl -I -k "${gkeURL}" | grep "HTTP/1.1 20*" """, returnStatus: true)
		                    if (retstat != 0) {
		                      sleep 30
		                    }
		                  }
		                }
		                if (retstat != 0) {
		                  echo "Health check to ${gkeURL} failed."
		                  sh exit ${retstat}
		                } else {
							data.appurls[0].environments[2].url = "${gkeURL}" as String
						}        
	            	    
	            	}
		           	)
	            } 

			    stage ('Production ZDD Go Live or Rollback') {
			        userInput = input(
			           	id: 'userInput', message: 'ZDD Go Live or ZDD Rollback?', parameters: [
			            [$class: 'ChoiceParameterDefinition', choices: 'ZDD Go Live\nZDD Rollback', description: 'ZDD Go Live to new deployment or ZDD Rollback to existing deployment', name: 'GO_LIVE_OR_ROLLBACK'],
			           	])
			     	withCredentials([
	          			string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
	          			string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
	        			]) {
	 						if (userInput == "ZDD Rollback") {
								parallel (
									OpenShift: {
				                    	sleep 30		                    
				                    	sh """
				                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
											${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${blue}-${projectTagName}-opr-svc=100 ${green}-${projectTagName}-opr-svc=0
										""" 
									},
					            	GKE: {
										dir("${env.WORKSPACE}${filepath}") {
					       					writeFile file: 'apitokenfile.json', text: APITOKEN
								        	sh """
								         		gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
											    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
											"""		
								         	if (green == "a") {
								        	sh """
											    kubectl --namespace=${blue} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=100 || true
											    kubectl --namespace=${green} annotate --overwrite -f ${gkeProdAIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=0 || true
								         	"""
								         	} else {
								        	sh """		
											    kubectl --namespace=${blue} annotate --overwrite -f ${gkeProdAIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=100 || true
											    kubectl --namespace=${green} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=0 || true
								         	"""
							         		}
								        	sh """
											    rm -rf apitokenfile.json
											"""									         		
										}					            	
					            	}
				            	)		             
							} else {
								parallel (
									OpenShift: {
				                    	sleep 30		                    
				                    	sh """
				                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
											${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${blue}-${projectTagName}-is:${dockerImageVersion} --insecure
											sleep 15
											${oc} import-image ${blue}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "imported"
											sleep 15
											${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${green}-${projectTagName}-opr-svc=50 ${blue}-${projectTagName}-opr-svc=50			             
										""" 
									},
					            	GKE: {
										dir("${env.WORKSPACE}${filepath}") {
					       					writeFile file: 'apitokenfile.json', text: APITOKEN
								        	sh """
								         		gcloud auth activate-service-account  ${kubernetesClusterServiceAccount} --key-file=apitokenfile.json --project=${kubernetesClusterName}
											    gcloud beta container clusters get-credentials ${kubernetesClusterName} --region ${kubernetesClusterRegion} --project ${kubernetesClusterProjectName}
											    kubectl --namespace=${blue} annotate --overwrite -f ${gkeProdBIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=50 || true
											    kubectl --namespace=${green} annotate --overwrite -f ${gkeProdAIngressTemplate} nginx.ingress.kubernetes.io/canary-weight=50 || true
											    rm -rf apitokenfile.json
											"""									         		
										}					            	
					            	}
				            	)		     
							}
						} 
					}
						
						
			} else {
				stage ('ZDD Rolling Deployment') {
					try {
						timeout(time:1, unit:'MINUTES'){
					userInput = input(
			           id: 'userInput', message: 'ZDD Go Live or ZDD Rollback?', parameters: [
			            [$class: 'ChoiceParameterDefinition', choices: 'ZDD Go Live\nZDD Rollback', description: 'ZDD Go Live to new deployment or ZDD Rollback to existing deployment', name: 'GO_LIVE_OR_ROLLBACK'],
			           ])
					}
					} catch (org.jenkinsci.plugins.workflow.steps.FlowInterruptedException e) {
						userinput = [GO_LIVE_OR_ROLLBACK:true]
					}
					withCredentials([
	          			string(credentialsId: openShiftCredential, variable: 'OSTOKEN'),
	          			string(credentialsId: kubernetesClusterCredentials, variable: 'APITOKEN')
	        		]) {
		        		parallel (
							OpenShift: {
								sleep 15
			          			sh """
									${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
									${oc} project ${prodProjectName}
			          			
		           					${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${green}-${projectTagName}-is:${dockerImageVersion} --insecure
		          					sleep 5
		           					${oc} import-image ${green}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "imported"
		           					sleep 5          			
			         				${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${green}-${projectTagName}-opr-svc=50 ${blue}-${projectTagName}-opr-svc=50
			          			"""
				          	}
						)
	        		}				
				}
      		}
            stage('Health Check') {
            	parallel (
					OpenShift: {
						withCredentials([
	                    string(credentialsId: openShiftCredential, variable: 'OSTOKEN')
	                    ]) {
							sleep 30		                    
	                    	sh """
	                            ${oc} login --server=${openShiftHost} --token=${OSTOKEN} --insecure-skip-tls-verify
	                        """
			                def retstat = 1
			                timeout (time: 15, unit: 'MINUTES') {
			                  for (;retstat != 0;) {
			                    retstat = sh(
			                    script: """
			                    curl -I -k "https://`${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.host }'`${route}" | grep "HTTP/1.1 20*" """, returnStatus: true)
			                    if (retstat != 0) {
			                      sleep 30
			                    }
			                  }
			                }
			                if (retstat != 0) {
			                  echo "Health check to https://`${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.host }'`${route} failed."
			                  sh exit ${retstat}
			                }         
			            }
		            }
	           	)
            }
			
			stage("Publish Reports") {
                archiveArtifacts artifacts: "${artifactFilePath}build/libs/*.jar", onlyIfSuccessful: true
                def json = JsonOutput.toJson(data)
                json = JsonOutput.prettyPrint(json)
                writeFile(file:'artifacts.json', text: json)
                archiveArtifacts artifacts: "${artifactFilePath}artifacts.json", onlyIfSuccessful: true
                //archiveArtifacts artifacts: "${artifactFilePath}build/test-results/**/*", onlyIfSuccessful: false
                //archiveArtifacts artifacts: "${artifactFilePath}build/reports/**/*", onlyIfSuccessful: false
                //archiveArtifacts artifacts: "${artifactFilePath}build/findbugs/*", onlyIfSuccessful: false
                //archiveArtifacts artifacts: "${artifactFilePath}build/jacoco/*", onlyIfSuccessful: false
                //step([$class: 'JUnitResultArchiver', testResults: "${artifactFilePath}build/test-results/test/TEST-*.xml"])  
                //step([$class:'FindBugsPublisher', canComputeNew:false, pattern:"${artifactFilePath}**/findbugs/*.xml"])
                //jacoco buildOverBuild: true, changeBuildStatus: true, execPattern: "${artifactFilePath}build/jacoco/test.exec"
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
