node('master') {
    try {
        currentBuild.displayName = "${env.BUILD_NUMBER}-EKS-BDSO-WebApp(CI/CD)"
        wrap([$class: 'BuildUser']) {
            def gitUrl = 'https://github.com/AceInfoSolutions/CoETechTraining-Web'
            def gitCredentialId = 'githubCredentialId'
            
           def nexusRegistryURL = 'nexus.aceinfosolutions.com:8441'
            def nexusRepoUser   =   'aceinfocoe'
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

            def eksTestingServiceTemplate = 'templates/eks/test-svc-template.json'
            def eksTestingDeploymentTemplate = 'templates/eks/test-deployment-template.json'
            def eksTestingIngressTemplate = 'templates/eks/test-ingress-template.json'
            def eksTestingNamespace = "coe-tech-test"
            def eksTestingDeploymentName = "webapp-coe-test"
            def eksTestingIngressName = "webapp-coe-test-ingress"
            


            def osConfigMapName = "${projectTagName}-config-map"

            
            


            def stageProjectName = "bdso-stag"
            def stageConfigMapKeyValues = "testConfigMapKeyVal"

            def eksStageServiceTemplate = 'templates/eks/stage-svc-template.json'
            def eksStageDeploymentTemplate = 'templates/eks/stage-deployment-template.json'
            def eksStageIngressTemplate = 'templates/eks/stage-ingress-template.json'
            def eksStageNamespace = "coe-tech-stage"
            def eksStageDeploymentName = "webapp-coe-stage"
            def eksStageIngressName = "webapp-coe-stage-ingress"
            

            def prodProjectName = "bdso-prod"
            def prodConfigMapKeyValues = "testConfigMapKeyVal"
            def prodProjectDisplayName = "bdso-prod"

            def eksProdTemplateA = 'templates/eks/prod-a-template.json'
            def eksProdTemplateB = 'templates/eks/prod-b-template.json'
            def eksProdTemplateAB = 'templates/eks/prod-ab-template.json'
            def eksProdNamespace = "coe-tech-prod"
            def eksProdDeploymentNameA = "webapp-coe-prod-a"
            def eksProdDeploymentNameB = "webapp-coe-prod-b"
            def eksProdIngressName = "webapp-coe-prod-ingress-ab"


            // def kubernetesClusterCredentials = "integrated-ml-apis-secret" 
            // def kubernetesClusterServiceAccount = "jenkins@integrated-ml-apis.iam.gserviceaccount.com"    
            def eksClusterName   = "coe-tech"
            def eksClusterRegion = "us-east-1"
            

            def route = '/'
            // def osurl = """http://${projectTagName}-${testProjectName}.kubeapps.aceinfosolutions.com${route}"""  
            
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
            def canaryAnnotation
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
                // withCredentials([
                //     [$class: 'UsernamePasswordMultiBinding', credentialsId: nexusCredentialId, usernameVariable: 'NEXUS_USERNAME', passwordVariable: 'NEXUS_PASSWORD']
                // ]) {
                //     dir("${env.WORKSPACE}${filepath}") {
                //         sh """ echo "${nexusRegistryURL}/${env.NEXUS_USERNAME}/${projectTagName}:${dockerImageVersion} ./src/main/docker/Dockerfile" > imageFileList """
                //         anchore bailOnFail: false, bailOnPluginFail: false, engineCredentialsId: 'AnchoreEngineCredentials', engineurl: 'http://anchore.aceinfosolutions.com:8228/v1', name: 'imageFileList'            
                //     }
                // }
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
                withCredentials([string(credentialsId: testConfigMapKeyValues, variable: 'TEST_CONFIG')]) 
                {
                    dir("${env.WORKSPACE}${filepath}") {
                        sh "aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}"
                        try {
                                sh """
                                    set +x
                                    kubectl create configmap -n ${eksTestingNamespace} ${osConfigMapName} $TEST_CONFIG
                                """         
                            } catch (Exception e) {}
                        sh """
                            kubectl apply -f ${eksTestingServiceTemplate}
                            kubectl apply -f ${eksTestingDeploymentTemplate}
                            kubectl apply -f ${eksTestingIngressTemplate}
                            kubectl -n ${eksTestingNamespace} rollout status deployment ${eksTestingDeploymentName}
                        """
                   }
               }
            }               
            
            
            stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "http://`kubectl get ingress/${eksTestingIngressName} -n ${eksTestingNamespace} -o=jsonpath='{.status.loadBalancer.ingress[0].hostname}'`" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Test health check failed."""
                  sh exit ${retstat}
                }               
            } 

            // stage('Functional Testing (Protractor)') {
            //      withCredentials([
            //         [$class: 'UsernamePasswordMultiBinding', credentialsId: adminCredentials, usernameVariable: 'ADMIN_USERNAME', passwordVariable: 'ADMIN_PASSWORD']]) {
            //             dir("${env.WORKSPACE}${filepath}") {
            //                 sh """
            //                     sleep 30
            //                 """
                            
                            
                                              
            //             }
            //         }
            // }   
            
           stage ('Staging Deployment') {
                 withCredentials([string(credentialsId: stageConfigMapKeyValues, variable: 'STAGE_CONFIG')]) 
                {
                    dir("${env.WORKSPACE}${filepath}") {
                        sh "aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}"
                        try {
                                sh """
                                    set +x
                                    kubectl create configmap -n ${eksStageNamespace} ${osConfigMapName} $STAGE_CONFIG
                                """         
                            } catch (Exception e) {}
                        sh """
                            
                            kubectl apply -f ${eksStageServiceTemplate}
                            kubectl apply -f ${eksStageDeploymentTemplate}
                            kubectl apply -f ${eksStageIngressTemplate}
                            kubectl -n ${eksStageNamespace} rollout status deployment ${eksStageDeploymentName}
                        """
                   }
               }
            }

            stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "http://`kubectl get ingress/${eksStageIngressName} -n ${eksStageNamespace} -o=jsonpath='{.status.loadBalancer.ingress[0].hostname}'`" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Stage health check failed."""
                  sh exit ${retstat}
                }               
            }
            
            stage ('Zero Downtime Deployment (ZDD)') {
                userInput = input(
                id: 'userInput', message: 'Canary or Rolling deployment?', parameters: [
                    [$class: 'ChoiceParameterDefinition', choices: 'ZDD Canary deployment\nZDD Rolling Deployment', description: 'ZDD Canary Deployment or ZDD Rolling Deployment', name: 'DEPLOYMENT_TYPE'],
                ])
            
                withCredentials([
                    string(credentialsId: prodConfigMapKeyValues, variable: 'PROD_CONFIG')
                    ]) {

                            dir("${env.WORKSPACE}${filepath}") {
                                sh "aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}"
                                try {
                                    sh """
                                        set +x
                                        kubectl create --namespace=${eksProdNamespace} configmap ${osConfigMapName} $PROD_CONFIG
                                    """         
                                } catch (Exception e) {}
                            }
                    }

                    def exists = fileExists 'active_service.txt'
                    if (exists) {
                        echo '##### Not a First Time Deployment #####'
                        sleep 15
                        sh """
                            cat active_service.txt
                        """
                    } else {
                        echo '##### First Time Deployment #####'
                        dir("${env.WORKSPACE}${filepath}") {
                            sh """
                                aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                kubectl apply -f ${eksProdTemplateA}
                                kubectl apply -f ${eksProdTemplateB}
                                kubectl apply -f ${eksProdTemplateAB}
                            """
                            sh "echo 'a-${projectTagName}-opr-svc' > active_service.txt"
                        }
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
            if (canaryDeployment) {
                 stage ('ZDD Canary Deployment') {
                    userInput = input(
                        id: 'userInput', message: 'ZDD Canary Deployment?', parameters: [
                        [$class: 'StringParameterDefinition', defaultValue: '25', description: 'New deployment weight', name: 'NEW_DEPLOYMENT_WEIGHT'],
                        [$class: 'StringParameterDefinition', defaultValue: '75', description: 'Existing deployment weight', name: 'EXISTING_DEPLOYMENT_WEIGHT'],
                    ])
                    blueWeight = userInput['EXISTING_DEPLOYMENT_WEIGHT']
                    greenWeight = userInput['NEW_DEPLOYMENT_WEIGHT']    
                        userInputeks = input(
                    id: 'userInputeks', message: 'Apply Canary to EKS?', parameters: [
                        [$class: 'ChoiceParameterDefinition', choices: 'Accept\nDeny', description: 'Canary Deploy to EKS?', name: 'EKS_CANARY_DEPLOYMENT'],
                    ])
                    
                    if (userInputeks == "Accept") {

                        echo '##### APPLYING EKS CANARY #####'
                            dir("${env.WORKSPACE}${filepath}") {

                                if (green == "a") { 
                                    canaryAnnotation = "\"{\\\"Type\\\":\\\"forward\\\",\\\"ForwardConfig\\\":{\\\"TargetGroups\\\":[{\\\"ServiceName\\\":\\\"a-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":${greenWeight}},{\\\"ServiceName\\\":\\\"b-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":${blueWeight}}],\\\"TargetGroupStickinessConfig\\\":{\\\"Enabled\\\":true,\\\"DurationSeconds\\\":200}}}\""
                                    echo canaryAnnotation

                                    sh """
                                        aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                        
                                        kubectl --namespace=${eksProdNamespace} annotate --overwrite ingress/${eksProdIngressName} alb.ingress.kubernetes.io/actions.forward-multiple-tg=${canaryAnnotation}

                                        kubectl apply -f ${eksProdTemplateA}
                                        kubectl rollout restart -n ${eksProdNamespace} deployment/${eksProdDeploymentNameA}
                                    """
                                } else {
                                    canaryAnnotation = "\"{\\\"Type\\\":\\\"forward\\\",\\\"ForwardConfig\\\":{\\\"TargetGroups\\\":[{\\\"ServiceName\\\":\\\"a-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":${blueWeight}},{\\\"ServiceName\\\":\\\"b-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":${greenWeight}}],\\\"TargetGroupStickinessConfig\\\":{\\\"Enabled\\\":true,\\\"DurationSeconds\\\":200}}}\""
                                    echo canaryAnnotation
                                    sh """
                                        aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                        
                                        kubectl --namespace=${eksProdNamespace} annotate --overwrite ingress/${eksProdIngressName} alb.ingress.kubernetes.io/actions.forward-multiple-tg=${canaryAnnotation}

                                        kubectl apply -f ${eksProdTemplateB}
                                        kubectl rollout restart -n ${eksProdNamespace} deployment/${eksProdDeploymentNameB}
                                    """
                                }

                            }
                        } else {
                            
                        echo '##### EKS CANARY NOT APPLIED #####'
                        }
                }
                
                stage('Healthcheck') {
                        def retstat = 1
                        timeout (time: 15, unit: 'MINUTES') {
                          for (;retstat != 0;) {
                            retstat = sh(script: """ curl -I -k "http://`kubectl get ingress/${eksProdIngressName} -n ${eksProdNamespace} -o=jsonpath='{.status.loadBalancer.ingress[0].hostname}'`" | grep "HTTP/1.1 20*" """, returnStatus: true)
                            if (retstat != 0) {
                              sleep 30
                            }
                          }
                        }
                        if (retstat != 0) {
                          echo """Prod health check failed."""
                          sh exit ${retstat}
                        }               
                    } 
                
                stage ('Production ZDD Go Live or Rollback') {
                    userInput = input(
                        id: 'userInput', message: 'ZDD Go Live or ZDD Rollback?', parameters: [
                        [$class: 'ChoiceParameterDefinition', choices: 'ZDD Go Live\nZDD Rollback', description: 'ZDD Go Live to new deployment or ZDD Rollback to existing deployment', name: 'GO_LIVE_OR_ROLLBACK'],
                        ])
                            if (userInput == "ZDD Rollback") {
                                dir("${env.WORKSPACE}${filepath}") {    
                                    if (green == "a") {
                                        canaryAnnotation = "\"{\\\"Type\\\":\\\"forward\\\",\\\"ForwardConfig\\\":{\\\"TargetGroups\\\":[{\\\"ServiceName\\\":\\\"a-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":0},{\\\"ServiceName\\\":\\\"b-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":100}],\\\"TargetGroupStickinessConfig\\\":{\\\"Enabled\\\":true,\\\"DurationSeconds\\\":200}}}\""
                                        sh """
                                            aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                            kubectl --namespace=${eksProdNamespace} annotate --overwrite ingress/${eksProdIngressName} alb.ingress.kubernetes.io/actions.forward-multiple-tg=${canaryAnnotation}
                                            kubectl rollout undo -n ${eksProdNamespace} deployment/${eksProdDeploymentNameA}
                                        """
                                    } else {
                                        canaryAnnotation = "\"{\\\"Type\\\":\\\"forward\\\",\\\"ForwardConfig\\\":{\\\"TargetGroups\\\":[{\\\"ServiceName\\\":\\\"a-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":100},{\\\"ServiceName\\\":\\\"b-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":0}],\\\"TargetGroupStickinessConfig\\\":{\\\"Enabled\\\":true,\\\"DurationSeconds\\\":200}}}\""
                                        sh """
                                            aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}     
                                            kubectl --namespace=${eksProdNamespace} annotate --overwrite ingress/${eksProdIngressName} alb.ingress.kubernetes.io/actions.forward-multiple-tg=${canaryAnnotation}
                                            kubectl rollout undo -n ${eksProdNamespace} deployment/${eksProdDeploymentNameB}
                                        """
                                    }                                                
                                }                                                       
                            } else {
                                dir("${env.WORKSPACE}${filepath}") {
                                    if (green == "a") {
                                        sh"""
                                            aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                            kubectl apply -f ${eksProdTemplateB}
                                            kubectl rollout restart -n ${eksProdNamespace} deployment/${eksProdDeploymentNameB}
                                        """
                                    }
                                    else{
                                        sh"""
                                            aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                            kubectl apply -f ${eksProdTemplateA}
                                            kubectl rollout restart -n ${eksProdNamespace} deployment/${eksProdDeploymentNameA}
                                        """
                                    }                                                
                                }                                               
                            }
                            canaryAnnotation = "\"{\\\"Type\\\":\\\"forward\\\",\\\"ForwardConfig\\\":{\\\"TargetGroups\\\":[{\\\"ServiceName\\\":\\\"a-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":50},{\\\"ServiceName\\\":\\\"b-webapp-lb\\\",\\\"ServicePort\\\":\\\"9000\\\",\\\"Weight\\\":50}],\\\"TargetGroupStickinessConfig\\\":{\\\"Enabled\\\":true,\\\"DurationSeconds\\\":200}}}\""
                            sleep 15
                            sh """
                                aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                                kubectl --namespace=${eksProdNamespace} annotate --overwrite ingress/${eksProdIngressName} alb.ingress.kubernetes.io/actions.forward-multiple-tg=${canaryAnnotation}
                            """
                    }
                                               
            } else {
                stage ('ZDD Rolling Deployment') {
                    dir("${env.WORKSPACE}${filepath}") {
                        sh """
                            aws eks --region ${eksClusterRegion} update-kubeconfig --name ${eksClusterName}
                            kubectl apply -f ${eksProdTemplateA}
                            kubectl apply -f ${eksProdTemplateB}
                            kubectl rollout restart -n ${eksProdNamespace} deployment/${eksProdDeploymentNameA}
                            kubectl rollout restart -n ${eksProdNamespace} deployment/${eksProdDeploymentNameB}
                        """                                
                    }                                      
                }
            }
            stage('Healthcheck') {
                def retstat = 1
                timeout (time: 15, unit: 'MINUTES') {
                  for (;retstat != 0;) {
                    retstat = sh(script: """ curl -I -k "http://`kubectl get ingress/${eksStageIngressName} -n ${eksStageNamespace} -o=jsonpath='{.status.loadBalancer.ingress[0].hostname}'`" | grep "HTTP/1.1 20*" """, returnStatus: true)
                    if (retstat != 0) {
                      sleep 30
                    }
                  }
                }
                if (retstat != 0) {
                  echo """Stage health check failed."""
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
 