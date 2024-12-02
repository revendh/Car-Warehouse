pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps{
           git branch: 'main', url: 'https://github.com/revendh/Car-Warehouse.git'
            }
        }
        // run sonarqube test
        stage('Run Sonarqube') {
            environment {
                scannerHome = tool 'SonarQubeScanner';
            }
            steps {
              withSonarQubeEnv(credentialsId: 'sonar_token', installationName: 'SonarQubeServer') {
                sh "${scannerHome}/bin/sonar-scanner"
              }
            }
        }
    }
}
