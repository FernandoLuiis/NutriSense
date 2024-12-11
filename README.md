





					   CATÓLICA DE SANTA CATARINA
 					CURSO DE ENGENHARIA DE SOFTWARE





						  NUTRISENSE





                   			      FERNANDO LUIS PALUDO
						  11/12/2024

Resumo

Sistema de controle de ração utilizado em áreas rurais para criação de animais exemplo suínos onde este projeto estará aplicado e será desenvolvido, trará uma abordagem onde terá o intuito de melhorar o controle de ração através de sensores e serviço de aplicativo mobile de modo a garantir um conforto maior ao produtor e a empresa, tendo mais segurança praticidade viabilidade em sua utilização.

1.	Introdução 
Controle de ração é de extrema importância na criação animal pois com base nestes dados e possível se ter uma previsão de quantos quilos o animal estará sendo entregue para empresa para o abate, existe padrões a serem seguidos e metas dispostas pela empresa tendo em vista de que o animal e a ração são fornecidos pela empresa,  deste modo o produtor precisa  ter o controle de quanto cada animal está consumindo diariamente de modo a saber se está dentro da metade diária estipulada pela empresa de consumo animal x ração. 
Este fator é importante para o produtor pois o animal precisa ser entregue com peso próximo ao estipulado, caso esteja muito abaixo ou acimo irá impactar diretamente no preço pago por animal ao produtor de onde vem seu lucro. Cada lote como chamado o ciclo dura em média 120 dias, número que pode ser alterado dependendo da necessidade de abate da empresa e a situação da criação animal.

Contexto 
Utilização do serviço mobile onde possa ser entregue dados que contenham o controle de ração que está sendo consumido alertando o produtor e a empresa sobre o nível dispostos nos silos garantindo que não falte a ração ou não se tenha espaço para armazenar adequadamente para armazenamento, para realizar as leituras destes dados serão utilizados sensores para controle de nível garantindo que o armazenamento está seguro. 
Justificativa 
Com a implantação de um controlador de nível de reação aplicado a engenharia de software, sistema IoT ligado a aplicação mobile para trazer gráficos e dados em tela do consumo da ração, disposta nos silos local onde fica armazenada a ração.
	

Objetivo
Garantir o controle de ração mais seguro trazer mais acomodação aos produtores, segurança e qualidade na criação animal, melhorando a produtividade e o bem-estar, além de melhorar controle de exigências dispostas pela empresa. Tendo em vista que atualmente a grande maioria não possui nenhum tipo de tecnologia para este controle, este que feito visualmente onde o produtor sobe nós silos olhando de cima para baixo assim estipulando o quanto de ração ainda possui armazenada.

2.	Descrição do projeto 


Será desenvolvido um sistema de controle de ração animal, que estão armazenadas em silos metálicos com uma média de 7 metros de altura para isso será utilizado sensores para fazer a medição, qualidade em relação a infiltração, mas para um melhor entendimento de como funciona este processo será realizada uma breve explicação.
O produtor rural (criador destes animais) atualmente ele funciona como um intermediador, ele trabalha para uma empresa, em sua propriedade rural em suas granjas, porém o animal e a ração são fornecidos por um terceiro que são as empresas tornando os produtores como chamado de (integrados) são pessoas que possuem um vínculo com a empresa que fornece o animal e a ração também podem ser chamadas de (parceiros), a empresa além de fornecer o animal também fornece a ração que está sendo utilizado para alimento do animal, que podem ser suínos, aves, gado entre outras espécies criadas em larga escala. 
Esta ração é fornecida pela empresa através de um cronograma, datas agendadas para entregas e de acordo com o crescimento do animal, é gerado uma nota informado a quantidade que está sendo entregue onde com base nesta quantidade ao termino do consumo de entrega o produtor faz a média geral dos consumos por animal, dia, semana, mês e ano. 
Entretanto o produtor precisa acompanhar o nível de ração que está disponível nos silos ainda de modo a saber se terá o suficiente até a data da próxima entrega ou será necessário adiantar o pedido ou atrasar por falta de espaço, comunicação onde feita por ligação para a fábrica de ração contato manual e sem precisão do controle, além deste fator pode existir furtos da ração, o que pode gerar prejuízo ao produtor a empresa e causar um mal-estar animal por falta da ração.
Sistema de alimentação é feito de forma automatizada onde motores ligados a uma espiral dentro de tubos trazem a ração dos silos até os cochos local onde é alimentado o animal com a ração vindo dos silos ficando centralizado entre as divisões dentro da granja quando o ultimo cocho estiver cheio os motores são desligados de forma automática. Neste contexto pode existir falhas, quebras nestes tubos, gerando desperdício prejuízo situação onde o produtor irá saber ao chegar na granja e visualizar o dano e a perda.
Com a proposta de desenvolvimento da NutriSense é de minimizar estas perdas chegando a dados muito próximos de zero pois com um controlador de nível de ração ligados a sensores capazes de realizar a captura destes dados, irá trazer segurança e melhor qualidade de vida ao produtor e isso tudo disponível uma plataforma mobile direto do seu smartphone, trazendo uma melhor experiência ao cliente de estar seguro em qual quer lugar de sua propriedade ou fora mesmo e tendo o controle de que tudo está ocorrendo bem.
Em casos de furto do alimento ou quebra da linha de alimentação o produtor será avisado com alertas em sua aplicação imediatamente deste modo fazendo com que consiga minimizar a perda e trazendo a sanção de melhor controle sobre a situação.
Mas além deste fator de segurança vale a pena ressaltar a facilidade em controlar a quantidade alimento que cada animal estará consumindo, seja diariamente mensalmente e assim por diante, com este mecanismo suas metas a serem atingidas de quando cada animal pode consumir se torna uma tarefa mais fácil, já que contará com a plataforma da NutriSense trará estes dados disposto direto no smartphone.
Outro fator de extrema importância e a ligação que pode ser feita com a empresa via produtor onde a entrega deste alimento pode ser controlada de acordo com o nível de ração disponível em cada propriedade dados captados através de sensores alertando o nível baixo de ração. Fazendo com que o produtor não precise ficar ligando solicitando ração ou pedindo para atrasar a entrega por uma falta de espaço. 
 Além disso pode controlar em que momento o caminhão saiu para entrega da fábrica em direção a sua propriedade. Ponto a ser destacado pois grande parte destes produtores não vivem apenas da produção animal, mas sim também da agricultura e podem estar na lavoura no momento da entrega o que pode ser um problema não acompanhar e monitorar esta entrega, ou mesmo ele pode estar aproveitando seu dia de lazer neste modo irá trazer maior acomodação ao produtor.


3.	Especificação técnica
   
A proposta envolve o uso de sensores a laser lidar modelo Vl53l0x, posicionados dentro dos silos para realizar a leitura dos dados apontando de cima para baixo. Essa abordagem é necessária porque a ração armazenada nos silos pode se acumular de maneira desigual, resultando em variações na altura do material em diferentes partes do silo.
Para alimentar esses sensores, serão utilizadas pequenas placas solares acopladas a baterias. Isso permite que o sistema opere com energia renovável e sustentável. As placas solares captam a energia do sol durante o dia e armazenam-na nas baterias para uso contínuo. Dessa forma, o consumo de energia é eficiente e não depende exclusivamente da rede elétrica.
No entanto, para garantir o suprimento de energia em casos de falta de luz solar prolongada ou alta demanda energética, o sistema também contará com alimentação proveniente da rede elétrica.
Essa abordagem híbrida de energia permite um funcionamento confiável e contínuo do sistema de sensores ultrassônicos nos silos. Além disso, ao utilizar energia renovável, contribui-se para a sustentabilidade do projeto, reduzindo a dependência de fontes de energia não renováveis e diminuindo a pegada de carbono.
Para fazer a comunicação será utilizado o Wi-Fi é um dos protocolos de comunicação sem fio mais comuns e amplamente utilizados atualmente. Ele permite a transmissão de dados entre dispositivos eletrônicos por meio de ondas de rádio, proporcionando conectividade de rede de curto e médio alcance.
A tecnologia Wi-Fi é baseada nos padrões definidos pela IEEE (Institute of Electrical and Electronics Engineers) na família de normas 802.11. Essas normas especificam as características técnicas e os protocolos de comunicação para garantir a interoperabilidade entre dispositivos Wi-Fi de diferentes fabricantes.
As principais características e benefícios do Wi-Fi incluem:
1. Alcance e Cobertura: O Wi-Fi oferece um alcance efetivo podendo ter um bom alcance em relação ao equipamento utilizado.
2. Velocidade de Transmissão: O Wi-Fi evoluiu e oferecem altas taxas de transferência de dados, suportando aplicações que exigem largura de banda, sendo essencial para se ter a precisão destes dados.
3. Conectividade Múltipla: O Wi-Fi permite a conexão simultânea de vários dispositivos a um único ponto de acesso, possibilitando que smartphones, oferecendo flexibilidade e conveniência para acessar a internet e compartilhar recursos entre os dispositivos.
4. Segurança: Os protocolos de segurança do Wi-Fi, como WPA2 (Wi-Fi Protected Access 2) e WPA3, fornecem a criptografia dos dados transmitidos e autenticação de dispositivos, ajudando a proteger a rede contra acessos não autorizados e ataques cibernéticos.
5. Escalabilidade: Redes Wi-Fi podem ser facilmente expandidas adicionando mais pontos de acesso para aumentar a cobertura ou suportar um maior número de dispositivos conectados. Isso torna o Wi-Fi uma solução flexível e escalável para diferentes ambientes e necessidades.
Em resumo, o Wi-Fi é uma tecnologia versátil e amplamente adotada que oferece conectividade sem fio confiável e rápida. Sua popularidade e compatibilidade com uma ampla gama de dispositivos tornam-no uma escolha comum para comunicação sem fio em ambientes domésticos, empresariais e públicos.
Para exibir estes dados ao cliente para poder fazer todo o controle serão utilizadas as seguintes ferramentas:
JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web e móvel. Com o JavaScript, você poderá adicionar interatividade e dinamismo ao seu aplicativo mobile. Ele permite manipular o conteúdo da tela, responder a eventos dos usuários e fazer chamadas assíncronas ao servidor para buscar e enviar dados.
ReactNative, por sua vez, é uma biblioteca JavaScript que é especialmente útil para criar interfaces de usuário reativas e componentizadas. Com o ReactNative, você pode construir componentes independentes que representam partes específicas da sua interface. Esses componentes podem ser reutilizados e combinados para criar uma interface de usuário completa. O ReactNative também utiliza o conceito de Virtual DOM, o que torna as atualizações de interface mais eficientes e rápidas.
No lado do servidor, o Node.js pode ser utilizado para criar uma camada de back-end para o seu aplicativo mobile. Com o Node.js, você pode desenvolver APIs (Application Programming Interfaces) que permitem a comunicação entre o aplicativo mobile e o servidor. As APIs podem ser usadas para fornecer dados, autenticar usuários, realizar operações de banco de dados e fornecer outras funcionalidades do lado do servidor necessárias para o funcionamento do aplicativo.
Além disso, o CSS (Cascading Style Sheets) é uma linguagem de estilo que permite definir a aparência e o layout dos elementos da interface do usuário do seu aplicativo mobile. Com o CSS, você pode definir cores, tamanhos, posicionamento e animações para criar uma experiência visualmente agradável e consistente
Para armazenar estes dados será utilizado banco de dados Postgre é um banco de dados em tempo real, que é amplamente utilizado para armazenar e sincronizar dados capturados por aplicativos móveis e web.
Uma das principais vantagens do Postgre é sua capacidade de sincronização em tempo real. Isso significa que, quando os dados são alterados em qualquer dispositivo conectado ao banco de dados, as alterações são propagadas instantaneamente para todos os outros dispositivos conectados. Essa sincronização automática permite que os usuários vejam atualizações em tempo real, tornando-o ideal para aplicativos colaborativos, chat em tempo real, fluxos de dados ao vivo e muito mais.
O Postgre armazena os dados em uma estrutura de árvore hierárquica, semelhante a um JSON. Os dados são organizados em nós, onde cada nó pode ter um valor atribuído e também pode conter outros nós filhos. Essa estrutura flexível permite que você modele os dados de acordo com as necessidades específicas do seu aplicativo.
Além disso, o Postgre oferece recursos poderosos de consulta e atualização de dados. Você pode ler, gravar e ouvir alterações em dados específicos, bem como realizar consultas sofisticadas para recuperar dados com base em critérios específicos. Isso permite que você recupere apenas os dados relevantes para o seu aplicativo, economizando largura de banda e melhorando o desempenho.
O Firebase Realtime Database também oferece recursos de segurança integrados. Você pode definir regras de segurança personalizadas para controlar quem pode ler e gravar nos seus dados, garantindo que apenas usuários autorizados tenham acesso aos dados apropriados. Deste modo sendo uma ótima opção para utilização neste projeto.
     Utilizar Docker em um projeto com banco de dados e integração com Arduino traz vantagens como consistência e facilidade de configuração. Ele permite criar um ambiente padronizado para toda a equipe, independente do sistema operacional ou das ferramentas usadas. Além disso, o Docker isola serviços como o banco de dados, facilitando testes e garantindo que dependências não interfiram umas nas outras.
Outra vantagem é a portabilidade e automação. Com Docker, é possível configurar e implantar rapidamente o ambiente em diferentes máquinas ou servidores usando arquivos como Dockerfile ou docker-compose.yml. Isso melhora a eficiência, facilita a integração contínua (CI/CD) e elimina problemas causados por diferenças no ambiente local, deixando mais tempo para focar no desenvolvimento.

3.1 Requisitos de software 
	Para construção deste projeto será utilizado requisitos como sensores ultrassónicos, ESP32, energia renovável, comunicação Wi-fi, aplicação mobile para apresentação dos dados capturados, banco de dados para armazenagem destes dados capturados, assim oferecendo uma visão geral dos componentes e funcionalidades serão necessários para o projeto, desde os dados capturados até a exibição e controle final via aplicativo. 

3.1.1	Requisitos funcionais:
- Fornecimento de ração;
- Recebimento de ração;
- Alimentação animal;
- Controlar e notificar armazenamento;
- Reposição da ração;

3.1.2 Requisitos não funcionais:
- Porcentagem de nível de ração em aplicativo;
- Alerta de segurança em aplicativo;
- Controle de consumo diário;
- Usabilidade no aplicativo mobile;
- Confiabilidade;

 
Caso de uso

 
Aplicação entre hardware e software 

 
Visão geral entrega cliente
3.2	Considerações de Design
3.2.1 Discussão sobre as escolhas de design, incluindo alternativas consideradas e justificativas para as decisões tomadas.
Visualização destes dados será exibo através de uma aplicação mobile essa decisão foi tomada por conta de alguns pontos importantes a serem destacados como exemplo o alvo público deste projeto serão pessoas com idades mais avançadas onde ainda grande parte acaba tendo dificuldade em usar equipamentos como computadores, notebooks e similares a estes, já com uso de smartphones o acesso se torna mais simples.
Além desta escolha do mobile ressalto a praticidade do uso dos smartphones onde é levado para todos os locais, de acordo com a situações anteriores onde este projeto não foca apenas no controle da ração mais preza muito a segurança do funcionamento do sistema que trazer o alimento até o animal em caso de quebras ou furto o cliente será avisado imediatamente sobre o ocorrido em seu smartphone, diferente do uso de outros equipamentos.
                  3.2.2 Visão Inicial da Arquitetura
A arquitetura da NutriSense é projetada para monitorar e controlar o nível de ração e a umidade do local de armazenamento de forma eficiente e precisa.
Componentes Principais:
•	Sensores Ultrassônicos: Responsáveis pela leitura do nível de ração.
•	Sensores de Umidade: Monitoram o ambiente de armazenamento.
•	Aplicativo Mobile: Permite o acesso e visualização dos dados em tempo real.
•	Conexão Wi-Fi: Facilita a comunicação entre os sensores e o aplicativo.
•	Banco de Dados: Armazena os dados coletados para análise e histórico.
•	ESP32: Para realizar o controle a comunicação entre os sensores pode ser aplicado toda logica da programação.
Interconexões:
•	Os sensores ultrassônicos e de umidade se comunicam via Wi-Fi com o aplicativo mobile.
•	O aplicativo mobile exibe os dados coletados pelos sensores de forma intuitiva e acessível para o usuário.
•	Os dados coletados são armazenados de forma segura e organizada no banco de dados para análise posterior.
Essa arquitetura garante uma monitorização contínua e eficaz do ambiente de armazenamento e do nível de ração, fornecendo informações valiosas para garantir a qualidade e o controle do processo. 
	3.2.3 Padrões de arquitetura 
	      Para criar a NutriSense, adotamos dois padrões de arquitetura fundamentais:
MVC (Model-View-Controller):
•	Model: Lógica de negócios e manipulação de dados.
•	View: Apresentação dos dados ao usuário.
•	Controller: Recebe entradas do usuário e atualiza o modelo e/ou a visão.
Este padrão mantém nosso código organizado e facilita a manutenção.
Microserviços:
•	Conjunto de pequenos serviços independentes.
•	Cada serviço executa uma função de negócios específica.
•	Comunicação via APIs RESTful ou mensageria.
Oferece escalabilidade, flexibilidade e facilidade de manutenção.
Esses padrões garantem que a NutriSense seja eficiente, precisa e fácil de manter, permitindo o monitoramento contínuo e eficaz do ambiente de armazenamento e do nível de ração.

3.3. Stack tecnológica
Para a construção da aplicação NutriSense, será utilizado JavaScript devido à experiência positiva com a linguagem em outros projetos. Como framework, escolhemos o React Native devido à sua facilidade de uso e estabilidade de versões em comparação com outros frameworks, como o Flutter, que enfrenta desafios com seus versionamentos. Além disso, o React Native oferece suporte para ambas as plataformas móveis, Android e iOS.
Para o desenvolvimento deste projeto, estamos utilizando o Visual Studio Code como nossa principal ferramenta de desenvolvimento. Sua interface intuitiva e extensibilidade tornam o processo de codificação mais eficiente e agradável.
Quanto ao armazenamento de dados, será utilizado o Firebase como nosso banco de dados. Com o Firebase, podemos armazenar e gerenciar facilmente os dados da aplicação de forma segura e escalável, além de aproveitar os recursos de autenticação, análise e hospedagem oferecidos pela plataforma.
Essas escolhas foram feitas com o objetivo de garantir uma experiência de desenvolvimento eficiente, permitindo focar na entrega de uma aplicação NutriSense de alta qualidade e desempenho.
E para manter toda a organização do projeto será utilizado Kanban um método simples e fácil de ser estrutura além de manter as tarefas e entregas de maneira estrutural organizadas além de ser muito flexível a mudanças.  
3	Referencias
META PLATFORMS, INC. (S.D.). Performance. Disponível em: https://reactnative.dev/docs/performance. Acesso em: 16 maio 2024.
DOCUMENTATION. Disponível em https://firebase.google.com/docs. Acesso em 16 maio 2024.
OLIVEIRA, Sergio Internet das coisas com esp =8266, arduino e raspberry pi. Disponível em: https://books.google.com.br/books?hl=pt-BR&lr=&id=E8gmDwAAQBAJ&oi=fnd&pg=PA17&dq=comunica%C3%A7%C3%A3o+wi+fi+entre+arduino+e+aplica%C3%A7%C3%A3o&ots=5RMcdv435z&sig=FOUGHymEqOOXgiUwYA73T2Z4tpU#v=onepage&q&f=false . Acessado em 02 maio de 2024.
PUBVET, Importância na sincronização do complexo 
https://www.pubvet.com.br/uploads/cf0f214abe068760d25b8fdeb3888a20.pdf

