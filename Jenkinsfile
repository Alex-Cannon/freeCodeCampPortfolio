pipeline {
    agent { docker { image 'node:10' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
}