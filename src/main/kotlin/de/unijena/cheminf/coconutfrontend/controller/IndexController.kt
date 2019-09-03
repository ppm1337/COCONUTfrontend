package de.unijena.cheminf.coconutfrontend.controller

import de.unijena.cheminf.npopensourcecollector.mongocollections.UniqueNaturalProductRepository
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class IndexController(var repository: UniqueNaturalProductRepository) {


    @RequestMapping("/")
    fun index(model: Model): String {
        model["unps"] = this.repository.findByInchikey("NVHVRPXPHFEYKX-UHFFFAOYSA-N")
        return "index"
    }

}