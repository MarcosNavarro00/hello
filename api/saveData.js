export default function handler(req, res) {
    if (req.method === 'POST') {
        const { people, language } = req.body;
        console.log("Recibido:", people, language);
        res.status(200).json({ message: `Datos recibidos: ${people} personas, idioma ${language}` });
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
}
