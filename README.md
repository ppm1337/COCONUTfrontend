# COCONUT Database

# Database indexes
Ensure all search fields are indexed. At the moment these are the following fields in the collection `uniqueNaturalProduct`:
* clean_smiles
* inchi
* inchikey
* molecular_formula
* smiles

and these for `sourceNaturalProduct`:
* simpleInchiKey
* simpleInchi
* source

# URI encoding
The encoding is handled solely on the server-side and is therefore not necessary.

# Known issues
* HeaderSearchBar: search event can be fired only once without reloading the page

# TODO
* advanced search
* pagination for search results
* substructure search
* change searches from URL paths to URL queries
