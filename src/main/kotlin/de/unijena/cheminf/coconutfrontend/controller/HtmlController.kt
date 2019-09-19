package de.unijena.cheminf.coconutfrontend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HtmlController {

    @RequestMapping(
            "/*",
            "/browser/*",
            "/search/*",
            "/compound/{identifier:smiles|inchi|inchikey}/{identifierValue}")
    fun index(): String {
        return "index"
    }

}