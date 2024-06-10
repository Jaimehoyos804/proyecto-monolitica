pipeline {
    agent any

    stages {
        stage("Clonar Repositorio") {
            steps {
                // Clonar el repositorio
                git branch: 'main', url: 'https://github.com/Jaimehoyos804/proyecto-monolitica.git'
            }
        }
        stage("Construcción de la imagen docker") {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        docker.build('proyectos-micro:v1', '--build-arg MONGO_URI=${MONGO_URI} .')
                    }
                }
            }
        }
        stage("Desplegar containers docker") {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                }
            }
        }
    }

    post {
        always {
            emailext(
                subject: "Status del build: ${currentBuild.currentResult}",
                body: "Se ha completado el proceso de el build. Puede detallar en: ${env.BUILD_URL}",
                to: "jaime.hoyos@est.iudigital.edu.co",
                from: "jenkins@iudigital.edu.co"
            )
        }
    }
}

