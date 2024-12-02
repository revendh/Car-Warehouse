pipeline {
    agent any
    environment {
        scannerHome = tool 'SonarQubeScanner' // Name from Global Tool Configuration
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/revendh/Car-Warehouse.git'
            }
        }
        stage('Run SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') { // Name of SonarQube server configuration
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
    }
}
