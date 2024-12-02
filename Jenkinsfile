pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps{
           git branch: 'main', url: ''
            }
        }
        // run sonarqube test
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'lil-sonar-tool';
            }
            steps {
              withSonarQubeEnv(credentialsId: 'lil-sonar-credentials', installationName: 'lil sonar installation') {
                sh "${scannerHome}/bin/sonar-scanner"
              }
            }
        }
    }
}
