pipeline {
    agent { docker { image 'node:10' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'npm install'
                sh 'node index.js'
            }
        }
    }
}