pipeline {
    agent { 
        label: 'docker'
    }
    stages {
        agent {
            label: 'docker'
            image: 'node:10'
        }
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}