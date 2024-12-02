pipeline {
    agent any

    environment {
        // Define environment variables for SonarQube if needed
        SONARQUBE_URL = 'http://10.45.88.133:9000'
        SONARQUBE_TOKEN = credentials('sonar_token') // Replace with the ID of your Jenkins credentials
    }

    tools {
        // Define the SonarQube Scanner tool to be used
        sonarQubeScanner 'SonarQubeScanner' // The name should match the one defined in Jenkins global tool configuration
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your Git repository
                git 'https://github.com/revendh/Car-Warehouse.git'
            }
        }

        stage('Build') {
            steps {
                // Run your build commands here (e.g., Maven, Gradle, etc.)
                script {
                    // Example build step (adjust as per your project)
                    sh 'mvn clean install'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                // Run SonarQube analysis
                script {
                    // Ensure SonarQube analysis starts after build step
                    withSonarQubeEnv('SonarQube') {
                        sh 'mvn sonar:sonar -Dsonar.projectKey=your_project_key -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.login=${SONARQUBE_TOKEN}'
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                // Wait for SonarQube quality gate result
                script {
                    def qg = waitForQualityGate() // This waits for the analysis result from SonarQube
                    if (qg.status != 'OK') {
                        error "Quality gate failed: ${qg.status}" // Fail the build if the quality gate fails
                    }
                }
            }
        }
    }

    post {
        always {
            // Actions to take after the pipeline execution (e.g., clean up)
        }
        success {
            // Actions to take if the build was successful
        }
        failure {
            // Actions to take if the build failed
        }
    }
}
