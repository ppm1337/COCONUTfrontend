package de.unijena.cheminf.coconutfrontend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class HtmlController {

    // identifier could be smiles, inchi, inchikey
    @RequestMapping("/compound/{identifier:smiles|inchi|inchikey}/{identifierValue}")
    fun compound(): String {
        return "compound"
    }

    @RequestMapping("/*","/browser/*", "/search/*")
    fun index(): String {
        return "index"
    }

}