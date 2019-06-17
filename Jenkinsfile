pipeline {
    agent { docker { image 'node:10' } }
    enviornment {
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