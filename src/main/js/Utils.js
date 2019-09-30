const OpenChemLib = require("openchemlib/full");

export default class Utils {
    static drawMoleculeBySmiles(smiles) {
        const options = {
            noImplicitAtomLabelColors: true,
            noStereoProblem: true,
            suppressChiralText: true
        };

        let canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 200;

        try {
            const npMolecule = OpenChemLib.Molecule.fromSmiles(smiles);
            OpenChemLib.StructureView.drawMolecule(canvas, npMolecule, options);
            // SVG way; returns a svg-tag
            // OpenChemLib.SVGRenderer.renderMolecule(npMolecule.getIDCode(), 400, 400);
        } catch(e) {
            console.log(e.name + " in OpenChemLib: " + e.message);
        }

        return canvas;
    }

}