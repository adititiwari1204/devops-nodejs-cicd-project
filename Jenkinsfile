pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/YOUR-USERNAME/devops-nodejs-cicd-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-nodejs-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh 'docker stop devops-nodejs-app || true'
                sh 'docker rm devops-nodejs-app || true'
                sh 'docker run -d -p 3000:3000 --name devops-nodejs-app devops-nodejs-app'
            }
        }
    }
}

