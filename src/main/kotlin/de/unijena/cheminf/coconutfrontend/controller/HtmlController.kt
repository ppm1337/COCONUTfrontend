package de.unijena.cheminf.coconutfrontend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HtmlController {

    @GetMapping(
            "/*",
            "/browser/*",
            "/search/*",
            "/search/simple/*",
            "/compound/{identifier:smiles|inchi|inchikey}/{identifierValue}")
    fun index(): String {
        return "index"
    }

}