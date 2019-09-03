package de.unijena.cheminf.coconutfrontend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@Configuration
@EnableMongoRepositories("de.unijena.cheminf.npopensourcecollector.mongocollections")
class CoconuTfrontendApplication

fun main(args: Array<String>) {
	runApplication<CoconuTfrontendApplication>(*args)
}
