pipeline {
    agent any

    tools {
        // Specify the SonarQube Scanner tool configured in Jenkins
        sonarQube 'SonarQubeScanner'
    }

    environment {
        // Add your SonarQube token as an environment variable
        SONAR_TOKEN = credentials('sonar_token')
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/revendh/Car-Warehouse.git', 
                    credentialsId: 'revendh_github_creds'
            }
        }

        stage('Run SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh """
                    /var/lib/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarQubeScanner/bin/sonar-scanner \
                    -Dsonar.projectKey=Car-Warehouse \
                    -Dsonar.sources=. \
                    -Dsonar.host.url=http://localhost:9000 \
                    -Dsonar.login=${SONAR_TOKEN}
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline execution completed."
        }

        success {
            echo "SonarQube analysis completed successfully."
        }

        failure {
            echo "Pipeline failed. Please check the logs for details."
        }
    }
}
