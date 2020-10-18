const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inserir dados na tabela 
    await saveOrphanage(db, {
        lat: "-23.446877",
        lng: "-46.9789429",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "98087102",
        images: [

            "https://images.unsplash.com/photo-1588063765533-8c50d519194b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",

            "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"

        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h ate 8h",
        open_on_weekends: "0"
    })

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //CONSULTAR SOMENTE 1 ORFANATO, PELO ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "2"')
    console.log(orphanage)

    // deletar dado da tabela

    // console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
    //console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
})
