# COCONUT Database
This is the frontend for the COlleCtion of Open Natural prodUcTs (COCONUT).
Features:
* browse database (cards and table browser)
* search by SMILES, InChI, InChIKey, molecular formula
* structure and substructure search
* individual page for each compound with molfile download and all information currently available in uniqueNaturalProduct collection
* download database as SDF

# Database Indexes
Ensure that all search fields are indexed. At the moment these are the following fields in the collection `uniqueNaturalProduct`:
* clean_smiles
* inchi
* inchikey
* molecular_formula
* smiles

and these for `sourceNaturalProduct`:
* simpleInchiKey
* simpleInchi
* source

# Known Issues
* HeaderSearchBar: search event can be fired only once without reloading the page
* SubstructureSearch: poor performance although using Ullmann, see https://rguha.wordpress.com/2008/09/19/faster-substructure-search-in-the-cdk/
* Tomcat configuration to allow illegal characters in URLs not working

# TODO
* browser filters
* advanced search
* pagination for search results
* change searches from URL paths to URL queries
* make substructure search sharable by setting search smiles in URL
