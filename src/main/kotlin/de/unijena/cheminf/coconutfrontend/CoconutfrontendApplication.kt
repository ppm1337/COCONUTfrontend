package de.unijena.cheminf.coconutfrontend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories("de.unijena.cheminf.npopensourcecollector.mongocollections")
class CoconutfrontendApplication


fun main(args: Array<String>) {
	System.setProperty("org.apache.tomcat.util.buf.UDecoder.ALLOW_ENCODED_SLASH", "true");
	runApplication<CoconutfrontendApplication>(*args)
}
