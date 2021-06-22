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
            def artifactFilePath = "/"

            def projectTagName = "bdso-Webapp"   

            def testProjectName = "bdso-test"
            def testConfigMapKeyValues = "testConfigMapKeyVal"
            def testProjectDisplayName = "bdso-test"
            def testTemplateName = "${artifactFilePath}templates/openshift/testing-template.yaml"

	    def stageProjectName = "bdso-stag"
	    def stageConfigMapKeyValues = "testConfigMapKeyVal"
	    def stageProjectDisplayName = "bdso-stag"
	    def stageTemplateName = "${artifactFilePath}templates/openshift/staging-template.yaml"

	    def prodProjectName = "bdso-prod"
	    def prodConfigMapKeyValues = "testConfigMapKeyVal"
	    def prodProjectDisplayName = "bdso-prod"
	    def prodTemplateName = "${artifactFilePath}templates/openshift/production-template.yaml"


            def oc = 'oc'
            def osHost = 'openshift.aceinfosolutions.com:8443'
            def osCredentialId = 'AceInfoCoECreds'
            def osConfigMapName = "${projectTagName}-config-map"

            def route = '/healthcheck'
            def osurl = ""  
			
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
                    branches: [[name: 'master']],
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

            //stage('Code Analysis (findBugs)') {
            //    dir("${env.WORKSPACE}${filepath}") {
            //        sh """
            //            ./gradlew check findbugsMain findbugsTest
            //        """
            //    }
            //}

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
                        ./gradlew buildDocker
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
                        anchore bailOnFail: true, bailOnPluginFail: true, engineCredentialsId: 'AnchoreEngineCredentials', engineurl: 'http://anchore.aceinfosolutions.com:8228/v1', name: 'imageFileList'            
                    }
                }
            }

            stage("Publish Reports") {
                archiveArtifacts artifacts: "${artifactFilePath}build/libs/*.jar", onlyIfSuccessful: true
                archiveArtifacts artifacts: "${artifactFilePath}build/test-results/**/*", onlyIfSuccessful: false
                archiveArtifacts artifacts: "${artifactFilePath}build/reports/**/*", onlyIfSuccessful: false
                //archiveArtifacts artifacts: "${artifactFilePath}build/findbugs/*", onlyIfSuccessful: false
                archiveArtifacts artifacts: "${artifactFilePath}build/jacoco/*", onlyIfSuccessful: false
                step([$class: 'JUnitResultArchiver', testResults: "${artifactFilePath}build/test-results/test/TEST-*.xml"])  
                //step([$class:'FindBugsPublisher', canComputeNew:false, pattern:"${artifactFilePath}**/findbugs/*.xml"])
                jacoco buildOverBuild: true, changeBuildStatus: true, execPattern: "${artifactFilePath}build/jacoco/test.exec"                                
            }
            
             stage ('Rolling Deployment (Test Env)') {
                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: osCredentialId, usernameVariable: 'OS_USERNAME', passwordVariable: 'OS_PASSWORD'],
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD'],
                    string(credentialsId: testConfigMapKeyValues, variable: 'TEST_CONFIG')
                    ]) {
                        sh """
                            ${oc} login ${osHost} --username=${env.OS_USERNAME} --password=${env.OS_PASSWORD} --insecure-skip-tls-verify
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
                            ${oc} import-image ${projectTagName}-is:${dockerImageVersion} --confirm --insecure | grep -i "successfully"
                            sleep 45
                        """
                    }
            }
            
            stage('Cucumber Testing') {
                 withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: adminCredentials, usernameVariable: 'ADMIN_USERNAME', passwordVariable: 'ADMIN_PASSWORD']]) {
                        dir("${env.WORKSPACE}${filepath}") {
                            sh """
                                ./gradlew cucumber "-PloginURL=https://`${oc} get route ${projectTagName} -n ${testingProject} -o jsonpath='{ .spec.host }'`${route}" -PadminUsername=${env.ADMIN_USERNAME} -PadminPassword=${env.ADMIN_PASSWORD}
                            """
                           
	
                    
                        }
                    }
            }            
            
            
            stage('Health Check') {
                def retstat = 1
                timeout (time: 5, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(
                    script: """
                    curl -I -k "https://`${oc} get route ${projectTagName} -n ${testingProject} -o jsonpath='{ .spec.host }'`${route}" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 10
                    }
                  }
                }
                if (retstat != 0) {
                  echo "Health check to https://`${oc} get route ${projectTagName} -n ${testingProject} -o jsonpath='{ .spec.host }'`${route} failed."
                  sh exit ${retstat}
                }               
            }  

            
            
           stage('Performance Testing (jMeter)') {
	            withCredentials([
	            	[$class: 'StringBinding', credentialsId: apigeeAPIKeyCredentials, variable: 'APIGEEAPIKEY']]) {
	                dir("${env.WORKSPACE}${filepath}") {
	                    osurl = "https://${apigeeTestURL}${route}?apikey=${APIGEEAPIKEY}"
	                    sh "/var/lib/jenkins/apache-jmeter-4.0/bin/jmeter -n -t jmetertest.jmx -Jurl=${osurl} -l build/reports/jmeter/jmeterapitest.xml"
	                    perfReport 'build/reports/jmeter/jmeterapitest.xml'
	                }
	            }
            }             

        
        
     stage ('Zero Downtime Deployment (ZDD)') {
                withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: osCredentialId, usernameVariable: 'OS_USERNAME', passwordVariable: 'OS_PASSWORD'],
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD'],
                    string(credentialsId: prodConfigMapKeyValues, variable: 'PROD_CONFIG')
                    ]) {
                        sh """
                            ${oc} login ${osHost} --username=${env.OS_USERNAME} --password=${env.OS_PASSWORD} --insecure-skip-tls-verify
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
                        } catch (Exception e) {
                        }
                        sh """
                            ${oc} process -f ${prodTemplateName} | ${oc} apply -f - -n ${prodProjectName}
                            ${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${projectTagName}-is:${dockerImageVersion} --insecure
                            sleep 5
                            ${oc} import-image ${projectTagName}-is:${dockerImageVersion} --confirm --insecure | grep -i "successfully"
                            sleep 30
                        """
                    }
         	
         	
				userInput = input(
		        id: 'userInput', message: 'Canary or Rolling deployment?', parameters: [
		        	[$class: 'ChoiceParameterDefinition', choices: 'ZDD Canary deployment\nZDD Rolling Deployment', description: 'ZDD Canary Deployment or ZDD Rolling Deployment', name: 'DEPLOYMENT_TYPE'],
		        ])
      			withCredentials([
        			[$class: 'UsernamePasswordMultiBinding', credentialsId: osCredentialId, usernameVariable: 'OS_USERNAME', passwordVariable: 'OS_PASSWORD']
      			]) {
	         		def exists = fileExists 'active_service.txt'
	         		if (exists) {
						echo '##### Not a First Time Deployment #####'
						sh """
							${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.to.name }' > active_service.txt
							cat active_service.txt
						"""
					} else {
    					echo '##### First Time Deployment #####'
    					sh """
    						${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${green}-${projectTagName}-is:${dockerImageVersion} --insecure
							${oc} import-image ${green}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "successfully"
							    						
    						${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${blue}-${projectTagName}-is:${dockerImageVersion} --insecure
							${oc} import-image ${blue}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "successfully"
							    						
							${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.to.name }' > active_service.txt
							cat active_service.txt
    						sleep 15
    						${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${blue}-${projectTagName}-opr-svc=50 ${green}-${projectTagName}-opr-svc=50
    						sleep 15
						"""
					}
	      			activeService = readFile('active_service.txt').trim()
	       			if (activeService == "a-${projectTagName}-opr-svc") {
	       				blue = "a"
	       				green = "b"
	       			}
	       			
	       			if (userInput != "ZDD Rolling Deployment") {
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
	          			[$class: 'UsernamePasswordMultiBinding', credentialsId: osCredentialId, usernameVariable: 'OS_USERNAME', passwordVariable: 'OS_PASSWORD']
	        		]) {
	          			sh """
           					${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${green}-${projectTagName}-is:${dockerImageVersion} --insecure
          					sleep 5
           					${oc} import-image ${green}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "successfully"
           					sleep 5          			
							${oc} login ${osHost} -n ${prodProjectName} --username=${env.OS_USERNAME} --password=${env.OS_PASSWORD} --insecure-skip-tls-verify
	         				${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${green}-${projectTagName}-opr-svc=${greenWeight} ${blue}-${projectTagName}-opr-svc=${blueWeight}
	          			"""
	        		}
	      		}
	      		
	      		
	      		stage ('Production ZDD Go Live or Rollback') {
			        userInput = input(
			           id: 'userInput', message: 'ZDD Go Live or ZDD Rollback?', parameters: [
			            [$class: 'ChoiceParameterDefinition', choices: 'ZDD Go Live\nZDD Rollback', description: 'ZDD Go Live to new deployment or ZDD Rollback to existing deployment', name: 'GO_LIVE_OR_ROLLBACK'],
			           ])
			        withCredentials([
			          [$class: 'UsernamePasswordMultiBinding', credentialsId: osCredentialId, usernameVariable: 'OS_USERNAME', passwordVariable: 'OS_PASSWORD']
			        ]) {
			        	sh """
			         		${oc} login ${osHost} -n ${prodProjectName} --username=${env.OS_USERNAME} --password=${env.OS_PASSWORD} --insecure-skip-tls-verify
			         	"""
			          	if (userInput == "ZDD Rollback") {
				            sh """
				           		${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${blue}-${projectTagName}-opr-svc=100 ${green}-${projectTagName}-opr-svc=0
 							"""              
			          	} else {
			            	sh """
			            		${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${blue}-${projectTagName}-is:${dockerImageVersion} --insecure
          						sleep 5
           						${oc} import-image ${blue}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "successfully"
           						sleep 5
			            		${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${green}-${projectTagName}-opr-svc=50 ${blue}-${projectTagName}-opr-svc=50			             
				            """                            
			          }
			        }
		      }
      		}
			
      		else {
      			stage ('ZDD Rolling Deployment') {
		         	sh """
						${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${blue}-${projectTagName}-is:${dockerImageVersion} --insecure
						sleep 5         					
						${oc} import-image ${blue}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "successfully"
						sleep 5
						${oc} tag --source=docker ${nexusRegistryURL}/${nexusRepoUser}/${projectTagName}:${dockerImageVersion} ${prodProjectName}/${green}-${projectTagName}-is:${dockerImageVersion} --insecure
						sleep 5         					
						${oc} import-image ${green}-${projectTagName}-is:${dockerImageVersion} --confirm --insecure -n ${prodProjectName} | grep -i "successfully"
						sleep 5
						${oc} set -n ${prodProjectName} route-backends ${projectTagName} ${blue}-${projectTagName}-opr-svc=50 ${green}-${projectTagName}-opr-svc=50    
					"""
				}
      		}
      		
            stage ('API LifeCycle Mgmt (APIGEE)') {
            	def httpStatus = 1;
            	withCredentials([
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: osCredentialId, usernameVariable: 'OS_USERNAME', passwordVariable: 'OS_PASSWORD'],
                    [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD'],
            		[$class: 'StringBinding', credentialsId: apigeeAuthCredentials, variable: 'APIGEECREDS']]) {        		
                 	dir("${env.WORKSPACE}${filepath}") {
                 		sh """
                            ${oc} login ${osHost} --username=${env.OS_USERNAME} --password=${env.OS_PASSWORD} --insecure-skip-tls-verify
                            ${oc} project ${prodProjectName}
	              			${oc} get route ${projectTagName} -n ${prodProjectName} -o jsonpath='{ .spec.host }' > ${projectTagName}-${prodProjectName}.txt
            	   		"""
                 	
						def openshiftURL = readFile("""${projectTagName}-${prodProjectName}.txt""").trim()

        				sh"""
        					cd templates/apigee/prod/apiproxy/targets
        					find . -type f -name '*.xml' -print0 | xargs -0 sed -i 's/SED_REPLACE_OPENSHIFT_URL/${openshiftURL}/g'
        					cd ../../
        					zip -r ${projectTagName} apiproxy/
        					curl --silent -v -X POST -u ${APIGEECREDS} -F ""file=@${projectTagName}.zip"" "https://api.enterprise.apigee.com/v1/organizations/rduriseti-eval/apis?action=import&name=${projectTagName}"
        					curl --silent -v -X POST -u ${APIGEECREDS} --header "Content-Type: application/x-www-form-urlencoded" "https://api.enterprise.apigee.com/v1/organizations/rduriseti-eval/environments/prod/apis/${projectTagName}/revisions/1/deployments?override=true"
        				"""
					}
            	}
			}

            stage('Performance Testing (jMeter)') {
	            withCredentials([
	            	[$class: 'StringBinding', credentialsId: apigeeAPIKeyCredentials, variable: 'APIGEEAPIKEY']]) {
	                dir("${env.WORKSPACE}${filepath}") {
	                    osurl = "https://${apigeeProdURL}${route}?apikey=${APIGEEAPIKEY}"
	                    sh "/var/lib/jenkins/apache-jmeter-4.0/bin/jmeter -n -t jmetertest.jmx -Jurl=${osurl} -l build/reports/jmeter/jmeterapitest.xml"
	                    perfReport 'build/reports/jmeter/jmeterapitest.xml'
	                }
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
    slackSend (color: '#FFFF00', message: "STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
}
def notifySuccessful() {
    slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
}
def notifyFailed() {
    slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
}
