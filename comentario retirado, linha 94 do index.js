/*api
        .post("http://"+config.apiBaseURL+"/quiz/qtdPerguntas")
        .then(
            (response)=> setNumFases(response.data.response.qtd_perguntas),
            api.get("http://"+config.apiBaseURL+"/users/data/"+user.id)
                .then((response) =>{
                    setNivelQuiz(response.data.response.UserData[0].nivelQuiz)
                    setAptoQuiz(response.data.response.UserData[0].aptoQuiz)
                    api.get("http://"+config.apiBaseURL+"/clientes/getRankingQuiz/")
                    .then((response) =>{
                        //setRankingQuiz(response.data.response.result)
                        setQtdRankingQuiz(response.data.response.quantidade)
                        handleRanking(response.data.response.result)
                        console.log("RANKING QUIZ:\n"+response.data.result)
                    })
                    .catch((err) => {
                        console.error("ops! ocorreu um erro" + err);
                    })
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                })
        )
        .catch((err) =>{
            console.error("ops! ocorreu um erro" + err);
        })*/
