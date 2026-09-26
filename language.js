(function () {
  'use strict';

  const STORAGE_KEY = 'victorsaavedra-language';
  const supported = new Set(['es', 'en']);
  const common = {
    'Obra': 'Work',
    'Artículos': 'Articles',
    'Investigación': 'Research',
    'Aprendizaje': 'Learning',
    'Trayectoria': 'Background',
    'Contacto': 'Contact',
    '← Volver': '← Back',
    '← Artículos': '← Articles',
    '← Trilogía': '← Trilogy',
    'Trilogía': 'Trilogy',
    'Ensayo': 'Essay',
    'Simuladores': 'Simulators',
    'Working Paper': 'Working Paper',
    'Leer el artículo': 'Read article',
    'Leer abstract': 'Read abstract',
    'Abrir Neural Arbitration Framework': 'Open Neural Arbitration Framework',
    'Portada de Neural Arbitration Framework: dos hemisferios cerebrales separados en un escaparate noir bajo la lluvia.': 'Cover of Neural Arbitration Framework: two separated brain hemispheres in a noir shop window under the rain.',
    'Leer introducción': 'Read introduction',
    'Para leer': 'Read',
    'Ver episodio piloto': 'View pilot episode',
    'Entrar al simulador': 'Open simulator',
    'Contacto': 'Contact',
    'Contactar': 'Contact',
    'Profesor · Analista · Observador incómodo de los relatos económicos': 'Professor · Analyst · A critical observer of economic narratives',
    'La Laguna, Canarias': 'La Laguna, Canary Islands',
    'Analista · Autor': 'Analyst · Author',
    'Saga · Pedagogía financiera': 'Series · Financial education',
    'Las distorsiones': 'Distortions',
    'del relato oficial': 'in the Official Narrative',
    'Aprender': 'Learning',
    'tomando decisiones': 'by making decisions',
    'Víctor Saavedra · Profesor · Analista · Observador incómodo de los relatos económicos': 'Víctor Saavedra · Professor · Analyst · A critical observer of economic narratives',
    '© 2026 Víctor Saavedra · La Laguna, Canarias': '© 2026 Víctor Saavedra · La Laguna, Canary Islands'
  };

  const pages = {
    'index.html': {
      title: 'Víctor Saavedra',
      description: 'Work, articles, research and learning. With an inconvenient habit of thinking outside the box.',
      strings: {
        'Las distorsiones': 'Distortions',
        'del relato oficial': 'in the Official Narrative',
        'Con la fea costumbre de pensar fuera de la caja.': 'With an inconvenient habit of thinking outside the box.',
        'El inversor inteligente ha muerto': 'The Intelligent Investor Is Dead',
        'Un ensayo crítico sobre la supervivencia del inversor clásico en un mercado donde los algoritmos aceleran las decisiones y las métricas tradicionales llegan tarde para interpretar la inversión que construye el futuro.': 'A critical essay on the survival of the classical investor in a market where algorithms accelerate decisions and traditional metrics arrive too late to interpret the investment that builds the future.',
        'Artículos y reflexiones': 'Articles & Reflections',
        'Una recopilación de artículos centrados en finanzas, inteligencia artificial y pensamiento crítico. Textos que combinan análisis, reflexión y una mirada propia sobre los cambios que están transformando la forma en que interpretamos la realidad económica, tecnológica y empresarial.': 'A collection of articles on finance, artificial intelligence and critical thinking. Essays that combine analysis, reflection and an independent view of the changes reshaping how we interpret economic, technological and business reality.',
        'Una propuesta arquitectónica sobre el problema de la alucinación en modelos de lenguaje. La alucinación no es un problema de conocimiento. Es un problema de arquitectura.': 'An architectural proposal addressing hallucination in language models. Hallucination is not a knowledge problem. It is an architecture problem.',
        'Saga · Pedagogía financiera': 'Series · Financial education',
        'Finanzas bajo sospecha': 'Finance Under Suspicion',
        'Una experiencia narrativa de formación financiera donde cada cifra es una pista y cada decisión revela una verdad empresarial.': 'A narrative approach to financial education in which every figure is a clue and every decision reveals a business truth.',
        'Simulador de Canales de Inversión': 'Investment Channels Simulator',
        'Un motor de causa y efecto entre ocho indicadores económicos, seis trimestres y una cartera que hay que reasignar sin saber qué estado del mercado te ha tocado. Se aprende decidiendo, no leyendo sobre cómo se decide.': 'A cause-and-effect engine spanning eight economic indicators, six quarters and a portfolio to reallocate without knowing which market regime you have drawn. You learn by deciding, not by reading about how decisions are made.',
        'Mi trayectoria profesional se ha construido en torno a una idea constante: ayudar a comprender mejor la realidad económica y financiera para tomar mejores decisiones.': 'My professional path has been built around one enduring idea: helping people understand economic and financial reality more clearly so they can make better decisions.',
        'Durante años he combinado el análisis financiero, el asesoramiento empresarial y la docencia en programas de máster. Dos perspectivas que se alimentan mutuamente: la del asesor que trabaja con empresas reales y la del profesor que debe explicar con claridad conceptos complejos. De esa tensión nace un enfoque propio: los estados financieros no son documentos estáticos, son narraciones económicas que, bien leídas, revelan la verdadera salud de una organización.': 'For years, I have combined financial analysis, business advisory work and teaching on master’s programmes. These perspectives reinforce one another: that of the adviser working with real companies, and that of the lecturer who must explain complex ideas clearly. From that tension comes a distinctive approach: financial statements are not static documents, but economic narratives that, when read well, reveal the true health of an organisation.',
        'Con el tiempo, mi trabajo ha evolucionado hacia una visión más integradora: finanzas, pensamiento crítico, tecnología e inteligencia artificial. Sigo explorando nuevas formas de análisis y comunicación porque creo que la forma en que entendemos nuestro entorno determina lo que somos capaces de hacer con él.': 'Over time, my work has evolved towards a more integrated view of finance, critical thinking, technology and artificial intelligence. I continue to explore new forms of analysis and communication because I believe that how we understand our environment determines what we are able to do within it.',
        'Nada de este recorrido se ha construido en solitario. En cada idea, en cada pregunta y en cada forma de mirar hay algo de quienes compartieron conmigo su conocimiento, su confianza, sus dudas o su manera de entender el mundo. Esta página es también una forma de reunir parte de lo recibido y devolverlo convertido en pensamiento, relato y experiencia.': 'None of this journey was built alone. Every idea, every question and every way of seeing carries something from those who shared their knowledge, trust, doubts or understanding of the world with me. This website is also a way of gathering part of what I have received and returning it as thought, narrative and experience.',
        'Para consultas sobre derechos de uso de obra literaria, colaboraciones editoriales o cualquier otro asunto.': 'For enquiries about rights to use literary works, editorial collaborations or any other matter.'
      }
    },
    'victor-saavedra.html': { alias: 'index.html' },
    'articulos.html': {
      title: 'Articles & Reflections — Víctor Saavedra',
      description: 'Writing on finance, artificial intelligence and critical thinking. An independent view of the changes reshaping economic and technological reality.',
      strings: {
        'Aprender': 'Learning',
        'tomando decisiones': 'by making decisions',
        'Artículos y reflexiones': 'Articles & Reflections',
        'Tres artículos': 'Three articles',
        'Las distorsiones del relato oficial': 'Distortions in the Official Narrative',
        'La crisis que no se ve, el crecimiento que no crea valor y el individuo que ha perdido su centro. Tres piezas que se leen por separado y se entienden mejor juntas.': 'The crisis that goes unseen, growth that creates no value, and the individual who has lost their centre. Three pieces that stand alone and make more sense together.',
        'Leer la trilogía': 'Read the trilogy',
        'Artículo de análisis bilingüe · Agosto 2026': 'Bilingual analysis · August 2026',
        'Anatomía de una cartera que busca refugio': 'Anatomy of a Portfolio Seeking Shelter',
        'Un análisis comparado de 2008, 2020 y 2022 que muestra por qué ningún activo protege frente a todos los riesgos y qué hace realmente resistente a una cartera.': 'A comparative analysis of 2008, 2020 and 2022 showing why no asset protects against every risk—and what truly makes a portfolio resilient.',
        'Artículo bilingüe · Agosto 2026': 'Bilingual article · August 2026',
        'El debate al que le falta una pregunta': 'The Debate Missing a Question',
        'El debate sobre una posible burbuja de la IA enfrenta valoraciones exigentes y beneficios reales, pero deja fuera una pregunta: si la rentabilidad futura bastará para justificar lo que el mercado ya ha pagado.': 'The debate over a possible AI bubble weighs demanding valuations against real earnings, yet leaves out one question: whether future returns will be enough to justify what the market has already paid.',
        'Artículo bilingüe · Julio 2026': 'Bilingual article · July 2026',
        'Cómo 3 euros pueden cambiar el comportamiento del mercado': 'How €3 Can Change Market Behaviour',
        'Una reflexión sobre cómo una medida aparentemente menor puede alterar los incentivos, modificar la conducta de empresas y consumidores y producir efectos económicos muy superiores a su coste nominal.': 'A reflection on how a seemingly minor measure can alter incentives, change the behaviour of businesses and consumers, and produce economic effects far greater than its nominal cost.',
        '¿Puede la conciencia artificial convertirse en una prima de valoración?': 'Could Artificial Consciousness Become a Valuation Premium?',
        'La opacidad, la peligrosidad y la posible conciencia de una inteligencia artificial podrían dejar de descontar valor y comenzar a crearlo. Una reflexión sobre Claude, el J-space y la construcción de expectativas ante el mercado público.': 'The opacity, risk and possible consciousness of an AI could stop depressing value and begin to create it. A reflection on Claude, J-space and the formation of expectations ahead of public markets.',
        'Artículo · Junio 2026': 'Article · June 2026',
        'La motosierra sin doctrina': 'The Chainsaw Without a Doctrine',
        'El ajuste era necesario; estas formas de ejecutarlo, indefendibles incluso para un libertario. Cuatro casos del actual gobierno argentino donde reducir el Estado se confundió con liberar al poder de sus límites.': 'The adjustment was necessary; these methods of carrying it out are indefensible even from a libertarian standpoint. Four cases in which Argentina’s current government confused reducing the state with freeing power from its limits.'
      }
    },
    'trilogia.html': {
      title: 'Distortions in the Official Narrative — Víctor Saavedra',
      description: 'Three articles on the silent fractures of the contemporary economy: the unseen crisis, growth without value and the fractured individual.',
      strings: {
        'Las distorsiones\ndel relato oficial': 'Distortions in the\nOfficial Narrative',
        'Las distorsiones del relato oficial': 'Distortions in the Official Narrative',
        'Tres artículos sobre las fracturas silenciosas de la economía contemporánea: la crisis que no se ve, el crecimiento que no crea valor y el individuo que ha perdido su centro.': 'Three articles on the silent fractures of the contemporary economy: the crisis that goes unseen, growth that creates no value, and the individual who has lost their centre.',
        'Una crisis travestida': 'A Crisis in Disguise',
        'Simulación de estabilidad en una economía que se descompone': 'The simulation of stability in an economy coming apart',
        '¿Y si la crisis ya no se manifiesta en forma de colapso repentino, sino como un deterioro silencioso, camuflado bajo una apariencia de estabilidad? Una hipótesis incómoda sobre las métricas que ya no capturan lo que ocurre.': 'What if crisis no longer appears as sudden collapse, but as silent deterioration concealed beneath an appearance of stability? An uncomfortable hypothesis about metrics that no longer capture what is happening.',
        'La trampa del crecimiento': 'The Growth Trap',
        'Cuando el mérito no cuenta, el crecimiento es solo apariencia': 'When merit no longer counts, growth is only an appearance',
        'Muchas empresas presentan cifras de crecimiento al alza. Pero al observar su estructura de costes y resultados, lo que aparece no es eficiencia ni rentabilidad sostenida. El mercado ya no premia al más eficiente, sino al mejor conectado.': 'Many companies report rising growth figures. Yet their cost structures and results reveal neither efficiency nor sustained profitability. The market no longer rewards the most efficient, but the best connected.',
        'El actor fracturado': 'The Fractured Actor',
        'Cuando la acción humana pierde su centro en una economía desplazada': 'When human action loses its centre in a displaced economy',
        'No es solo el sistema el que colapsa. Es el actor el que se fractura. Y cuando eso ocurre, ya no importa que el escenario siga en pie: la función ha terminado.': 'It is not only the system that collapses. The actor fractures too. And when that happens, it no longer matters that the stage remains standing: the performance is over.'
      }
    },
    'finanzas.html': {
      title: 'Finance Under Suspicion — Víctor Saavedra',
      description: 'A narrative financial-education series in which every figure is a clue and every decision reveals a business truth.',
      strings: {
        'Finanzas bajo sospecha': 'Finance Under Suspicion',
        'Saga · Pedagogía financiera': 'Series · Financial education',
        'Víctor Drave no es un detective. Es un financiero forense. Y en Sterling Corp, los números mienten mejor que las personas.': 'Víctor Drave is not a detective. He is a forensic finance specialist. And at Sterling Corp, the numbers lie better than people do.',
        'Para consultas sobre derechos de uso de esta obra.': 'For enquiries about rights to use this work.'
      }
    },
    'simuladores.html': {
      title: 'Simulators — Víctor Saavedra',
      description: 'Interactive learning environments for understanding investment and business decisions through cause and effect.',
      strings: {
        'Aprender\ntomando decisiones': 'Learning by\nmaking decisions',
        'Entornos cerrados donde cada indicador afecta a los demás con causa, intensidad y desfase propios. Nada de leer sobre cómo se invierte o cómo se gestiona una empresa: se decide, y solo después se entiende por qué salió como salió.': 'Closed environments in which every indicator affects the others with its own cause, intensity and time lag. No reading about how to invest or run a business: you decide first, then understand why the outcome unfolded as it did.',
        'Inversión': 'Investment',
        'Nivel Básico · 8 indicadores · 6 trimestres': 'Basic level · 8 indicators · 6 quarters',
        'Simulador de Canales de Inversión': 'Investment Channels Simulator',
        'Un motor de causa y efecto entre PIB, inflación, PMI, tipos oficiales, déficit público, bono soberano, beneficios empresariales y volatilidad. Eliges perfil o construyes tu propia cartera, y reasignas trimestre a trimestre sin saber qué estado del mercado te ha tocado hasta el final.': 'A cause-and-effect engine linking GDP, inflation, PMI, policy rates, the public deficit, sovereign bonds, corporate earnings and volatility. Choose a profile or build your own portfolio, then reallocate quarter by quarter without learning which market regime you drew until the end.',
        'Nivel Intermedio · 12 indicadores · 6 trimestres': 'Intermediate level · 12 indicators · 6 quarters',
        'Simulador de Canales de Inversión — Intermedio': 'Investment Channels Simulator — Intermediate',
        'Doce indicadores y escenarios con señales simultáneas: unas se refuerzan y otras compiten. El reto ya no es reconocer una pista aislada, sino decidir cuál domina y cuánto justifica mover la cartera.': 'Twelve indicators and scenarios with simultaneous signals: some reinforce one another while others compete. The challenge is no longer to recognise an isolated clue, but to decide which signal dominates and how much portfolio movement it justifies.',
        'Próximamente': 'Coming soon',
        'En desarrollo': 'In development',
        'Nivel Avanzado': 'Advanced level',
        '25 indicadores y ambigüedad real: el ajuste que suele hacerse en cada caso ya no es siempre el más evidente.': 'Twenty-five indicators and genuine ambiguity: the adjustment usually made in each case is no longer always the obvious one.',
        'Simulador de gestión empresarial': 'Business Management Simulator',
        'La misma lógica de causa y efecto, esta vez aplicada a las decisiones de una empresa: precio, capacidad, plantilla, financiación.': 'The same cause-and-effect logic, this time applied to business decisions: pricing, capacity, staffing and financing.'
      }
    },
    'articulo1.html': {
      title: 'A Crisis in Disguise — Víctor Saavedra',
      description: 'A crisis that appears not as collapse, but as the silent deterioration of economic reality.',
      strings: {
        'Trilogía · Artículo I': 'Trilogy · Article I',
        'Las distorsiones del relato oficial': 'Distortions in the Official Narrative',
        'Una crisis travestida': 'A Crisis in Disguise',
        'Simulación de estabilidad en una economía que se descompone': 'The simulation of stability in an economy coming apart',
        'Durante décadas, supimos reconocer una crisis económica por sus síntomas evidentes: desplomes bursátiles, quiebras bancarias, recesiones en cadena, protestas sociales. Las crisis tenían forma, tiempo y narrativa. Pero ¿y si el modelo tradicional ha cambiado? ¿Y si la crisis ya no se manifiesta en forma de colapso repentino, sino como un deterioro silencioso, camuflado bajo una apariencia de estabilidad?': 'For decades, we knew how to recognise an economic crisis by its obvious symptoms: market crashes, bank failures, cascading recessions and social unrest. Crises had a shape, a time frame and a narrative. But what if the traditional pattern has changed? What if crisis no longer appears as sudden collapse, but as silent deterioration concealed beneath an appearance of stability?',
        'En este artículo propongo una hipótesis inquietante: estamos viviendo una crisis económica real, estructural, profunda, pero travestida. Su disfraz es la normalidad. Su invisibilidad nace del exceso de información y de la obsolescencia de nuestras métricas tradicionales.': 'This article advances a troubling hypothesis: we are living through a real, structural and profound economic crisis, but one in disguise. Its disguise is normality. Its invisibility stems from an excess of information and the obsolescence of our traditional metrics.',
        '¿Dónde está la recesión?': 'Where Is the Recession?',
        'Desde 2022, muchos analistas —con datos en la mano— han venido advirtiendo del riesgo de una recesión global. Inversión de la curva de tipos, desaceleración de la productividad, deterioro del sentimiento empresarial, tensiones geopolíticas… Todo apuntaba a una desaceleración inminente. Pero no ha llegado. O al menos, no como la esperábamos.': 'Since 2022, many analysts—data in hand—have warned of the risk of a global recession. An inverted yield curve, slowing productivity, deteriorating business sentiment and geopolitical tensions all pointed to an imminent downturn. But it has not arrived. Or at least, not in the way we expected.',
        'El PIB ha seguido creciendo, aunque impulsado por gasto público y deuda. El empleo se ha mantenido firme, aunque con más subempleo y precariedad. La inflación ha bajado nominalmente, pero los precios siguen ahogando a las clases medias. Los mercados bursátiles continúan en máximos, aunque sostenidos por narrativas y expectativas, no por fundamentos productivos.': 'GDP has continued to grow, though driven by public spending and debt. Employment has remained firm, though with more underemployment and insecurity. Inflation has fallen in headline terms, yet prices continue to squeeze the middle classes. Stock markets remain at record highs, though sustained by narratives and expectations rather than productive fundamentals.',
        'Todo parece indicar que el ciclo económico ha sido anestesiado. ¿Por qué?': 'Everything suggests that the economic cycle has been anaesthetised. Why?',
        'La economía como simulacro': 'The Economy as Simulation',
        'Podríamos decir que la economía actual ha dejado de representar la realidad material y se ha convertido en un sistema de signos, titulares y expectativas sin conexión con el día a día de la población. Ya no importa tanto la realidad económica como la narrativa que consigue mantenerla en pie. Lo que se gestiona no es el bienestar, sino la percepción de estabilidad.': 'One might say that today’s economy no longer represents material reality and has become a system of signs, headlines and expectations disconnected from people’s daily lives. Economic reality matters less than the narrative that keeps it standing. What is managed is not wellbeing, but the perception of stability.',
        'Vivimos en una economía dopada por estímulos monetarios, intervenida por bancos centrales, mediatizada por algoritmos de contenido y sostenida por expectativas más que por estructuras.': 'We live in an economy doped by monetary stimulus, shaped by central-bank intervention, mediated by content algorithms and sustained more by expectations than by structures.',
        'En ese entorno:': 'In that environment:',
        'Las crisis ya no se manifiestan con una gran explosión, sino como una erosión lenta del bienestar.': 'Crises no longer erupt in a single explosion; they appear as the slow erosion of wellbeing.',
        'Ya no se desploma el sistema, sino que se vacía de sentido, como un decorado que se sostiene mientras no se mire detrás del telón.': 'The system no longer collapses; it is hollowed out, like a stage set that remains standing only while no one looks behind the curtain.',
        'Las métricas clásicas no captan lo que está ocurriendo: necesitamos indicadores que midan malestar psicosocial, polarización, agotamiento cívico.': 'Classical metrics do not capture what is happening: we need indicators that measure psychosocial distress, polarisation and civic exhaustion.',
        'No se trata de alarmismo, sino de cambiar el ángulo del análisis.': 'This is not alarmism; it is a call to change the angle of analysis.',
        'Conclusión: la crisis ya no grita, se disuelve': 'Conclusion: the Crisis No Longer Shouts; It Dissolves',
        'Lo que vivimos no es ausencia de crisis, sino mutación en su forma de manifestarse. En vez de recesiones que arrasan, tenemos procesos degenerativos que se infiltran en lo cotidiano. En lugar de pánico en los mercados, hay indiferencia en las calles. No estalla el sistema, se disuelve su capacidad de generar bienestar real.': 'What we are experiencing is not the absence of crisis, but a change in the way it manifests itself. Instead of devastating recessions, we face degenerative processes that seep into everyday life. Instead of panic in the markets, there is indifference in the streets. The system does not explode; its capacity to generate genuine wellbeing dissolves.',
        'La narrativa del "todo va bien" es una máscara sonriente. Pero está agrietada.': 'The “everything is fine” narrative is a smiling mask. But it is cracked.',
        'Siguiente: La trampa del crecimiento →': 'Next: The Growth Trap →'
      }
    },
    'articulo2.html': {
      title: 'The Growth Trap — Víctor Saavedra',
      description: 'When merit no longer counts and growth is only an appearance: the market that stopped correcting.',
      strings: {
        'Trilogía · Artículo II': 'Trilogy · Article II',
        'Las distorsiones del relato oficial': 'Distortions in the Official Narrative',
        'La trampa del crecimiento': 'The Growth Trap',
        'Cuando el mérito no cuenta, el crecimiento es solo apariencia': 'When merit no longer counts, growth is only an appearance',
        'En el artículo anterior hablábamos de una economía que aparenta solidez pero que, al rascar la superficie, muestra signos evidentes de desgaste estructural. Hoy descendemos al plano empresarial, donde se reproduce con claridad la misma distorsión: el crecimiento como sinónimo de salud, sin preguntarnos qué lo está provocando ni hacia dónde conduce.': 'The previous article examined an economy that appears sound but reveals clear signs of structural wear beneath the surface. Here we move down to the corporate level, where the same distortion is plainly reproduced: growth treated as a synonym for health, without asking what drives it or where it leads.',
        'Pero antes de seguir, conviene detenernos un momento. Porque no todo el mundo entiende lo mismo cuando se habla de crecimiento y de valor.': 'Before going further, however, it is worth pausing. Growth and value do not mean the same thing to everyone.',
        'Crecimiento es el aumento cuantitativo de ciertas magnitudes: facturación, plantilla, activos, cuota de mercado. Valor, en cambio, remite a la rentabilidad real y sostenida del modelo: la capacidad de generar beneficios consistentes, retornos para el accionista y eficiencia operativa. Una empresa puede crecer sin crear valor. Incluso destruirlo mientras escala.': 'Growth is the quantitative increase of certain measures: revenue, headcount, assets or market share. Value, by contrast, refers to the model’s real and sustained profitability—its capacity to generate consistent earnings, shareholder returns and operating efficiency. A company can grow without creating value. It can even destroy value as it scales.',
        'La trampa comienza cuando confundimos una cosa con la otra.': 'The trap begins when we confuse one with the other.',
        'Hoy muchas empresas presentan cifras de crecimiento al alza. Pero al observar su estructura de costes y resultados, no encontramos señales claras de eficiencia, innovación o rentabilidad sostenida. Lo que se aprecia, en muchos casos, son márgenes reducidos, gastos fijos sobredimensionados, dependencia de ayudas públicas y una presión constante por mantener una apariencia de solidez que ya no se corresponde con una mejora real del modelo de negocio.': 'Many companies now report rising growth figures. Yet their cost structures and results show no clear evidence of efficiency, innovation or sustained profitability. What often emerges instead is thin margins, oversized fixed costs, dependence on public support and constant pressure to maintain an appearance of strength that no longer corresponds to any genuine improvement in the business model.',
        'El mercado que dejó de corregir': 'The Market That Stopped Correcting',
        'Desde la crisis de 2008, el mercado ha ido perdiendo su capacidad para asignar eficientemente los recursos y para distinguir entre modelos empresariales sostenibles y aquellos que dependen estructuralmente de apoyo externo. Cayó la banca, se rescató el sistema financiero. Cayó la demanda, se activaron estímulos. Estalló la pandemia, se distribuyeron ERTEs, exenciones fiscales, avales y ayudas directas.': 'Since the 2008 crisis, the market has gradually lost its ability to allocate resources efficiently and distinguish sustainable business models from those structurally dependent on external support. Banks failed and the financial system was rescued. Demand fell and stimulus was activated. The pandemic struck and furlough schemes, tax relief, guarantees and direct aid were deployed.',
        'Nadie discute que había que actuar. Pero el problema no fue la intervención. Fue su duración y su secuela: la normalización de un entorno donde los errores dejan de tener consecuencias y el mérito, de tener recompensa.': 'No one disputes that action was necessary. The problem was not intervention itself, but its duration and aftermath: the normalisation of an environment in which mistakes cease to have consequences and merit ceases to be rewarded.',
        'En este nuevo ecosistema, muchas empresas no sobreviven por la solidez de su propuesta de valor, sino por su capacidad de alinearse con mecanismos institucionales de soporte. Lo preocupante no es que accedan a esas ayudas, sino que, en muchos casos, ese acceso sustituye la necesidad de revisar su eficiencia operativa o su viabilidad estratégica. Cuando los recursos públicos cubren de forma sistemática las debilidades del modelo de negocio, el resultado no es resiliencia, sino dependencia crónica.': 'In this new ecosystem, many companies survive not because their value proposition is sound, but because they can align themselves with institutional support mechanisms. The concern is not that they receive aid, but that access to it often replaces the need to review operating efficiency or strategic viability. When public resources systematically cover weaknesses in a business model, the result is not resilience but chronic dependence.',
        'El diseño de los incentivos': 'The Design of Incentives',
        'El reparto de los fondos europeos Next Generation ilustra con claridad el tipo de distorsión al que nos referimos. Las grandes empresas, que constituyen el 0,19% del tejido empresarial en España, accedieron al 59,3% de los fondos. No es un error técnico. Es un diseño de incentivos.': 'The allocation of EU Next Generation funds clearly illustrates this kind of distortion. Large companies, which account for 0.19% of Spain’s business population, received 59.3% of the funds. This is not a technical error. It is an incentive design.',
        'Las grandes empresas tienen departamentos enteros especializados en adaptar sus proyectos a las convocatorias. Las pequeñas, en muchos casos, apenas consiguen cerrar el trimestre en orden.': 'Large companies have entire departments devoted to adapting projects to funding calls. Many small businesses can barely close the quarter in good order.',
        'El resultado es previsible: no se premia al que aporta más valor, sino al que sabe traducir su actividad al lenguaje subvencionable. Y lo subvencionable, en muchos casos, no responde a la lógica económica, sino a una agenda política.': 'The result is predictable: rewards go not to those who create the most value, but to those best able to translate their activity into the language of subsidies. And what qualifies for support often follows a political agenda rather than economic logic.',
        'A largo plazo, este sesgo no solo erosiona la competitividad, sino también la autonomía estratégica del tejido empresarial, al subordinar su evolución a los ciclos y criterios de la política pública.': 'In the long run, this bias erodes not only competitiveness but also the strategic autonomy of the business sector, subordinating its development to the cycles and criteria of public policy.',
        'El problema moral': 'The Moral Problem',
        'El efecto más nocivo no es solo la asimetría. Es que este entorno genera señales perversas. Incentiva a crecer, aunque no se cree valor. A expandirse sin consolidar. A sobrevivir por ajuste fiscal o ventaja regulatoria, no por mérito propio.': 'The most harmful effect is not asymmetry alone. This environment sends perverse signals: grow even without creating value; expand without consolidating; survive through tax treatment or regulatory advantage rather than on merit.',
        'Y eso no es solo un problema de eficiencia. Es un problema moral. Porque cuando el crecimiento se vuelve indiferente al mérito, se rompe el contrato tácito que da legitimidad al sistema: el esfuerzo debería tener retorno. Y cuando eso deja de cumplirse, el incentivo para innovar, para asumir riesgos, para hacer las cosas bien, se debilita hasta desaparecer.': 'This is not merely an efficiency problem. It is a moral one. When growth becomes indifferent to merit, the tacit contract that legitimises the system is broken: effort should earn a return. When that ceases to hold, the incentive to innovate, take risks and do things well weakens until it disappears.',
        'No se trata de repartir más recursos. Se trata de restablecer el vínculo roto entre el mérito y el resultado. Mientras ese vínculo no se recupere, el sistema seguirá premiando la adaptación formal y castigando la eficiencia real. Es entonces cuando el crecimiento deja de hablar del futuro y se confirma lo que dijimos desde el principio: cuando el mérito desaparece, lo que queda es solo apariencia.': 'The answer is not to distribute more resources, but to restore the broken link between merit and outcome. Until that link is recovered, the system will continue to reward formal compliance and punish genuine efficiency. Growth then ceases to speak about the future and confirms our starting point: when merit disappears, only appearance remains.',
        '← Una crisis travestida': '← A Crisis in Disguise',
        'El actor fracturado →': 'The Fractured Actor →'
      }
    },
    'articulo3.html': {
      title: 'The Fractured Actor — Víctor Saavedra',
      description: 'The fractured actor: when human action loses its centre in a displaced economy.',
      strings: {
        'Trilogía · Artículo III': 'Trilogy · Article III',
        'Las distorsiones del relato oficial': 'Distortions in the Official Narrative',
        'El actor fracturado': 'The Fractured Actor',
        'Cuando la acción humana pierde su centro en una economía desplazada': 'When human action loses its centre in a displaced economy',
        'Durante décadas, fue el individuo —con sus decisiones, riesgos y proyectos— quien sostuvo el dinamismo de nuestras economías. Esa forma de entender el sistema, centrada en la libertad de actuar, fue el corazón del pensamiento liberal clásico y, más tarde, de la Escuela Austriaca. Bajo esa lógica, el sujeto económico no era una pieza del engranaje, sino el motor del sistema. Sin embargo, en este extraño periodo pospandémico y posglobalización, el actor —el individuo que decide, proyecta y actúa— parece haber perdido el sentido de su papel en la economía.': 'For decades, the individual—with their decisions, risks and projects—sustained the dynamism of our economies. That understanding of the system, centred on freedom to act, lay at the heart of classical liberal thought and later of the Austrian School. Under this logic, the economic subject was not a cog in the machine but the engine of the system. Yet in this strange post-pandemic, post-globalisation period, the actor—the individual who decides, plans and acts—seems to have lost the meaning of their role in the economy.',
        'No estamos ante un colapso clásico ni ante una explosión repentina. Lo que vivimos es una desvinculación progresiva entre estructura económica y horizonte vital. El crecimiento continúa, pero sin dirección. Las métricas tradicionales siguen ofreciendo cifras positivas, pero no traducen expectativas. La macroeconomía, como dijimos en el primer artículo, ha aprendido a simular estabilidad mientras la realidad social se degrada.': 'We are not facing a classical collapse or a sudden explosion. We are witnessing a progressive separation between economic structure and people’s horizon in life. Growth continues, but without direction. Traditional metrics still report positive figures, but fail to convey expectations. As the first article argued, macroeconomics has learned to simulate stability while social reality deteriorates.',
        'En el segundo artículo abordamos la trampa del crecimiento: grandes empresas ineficientes que sobreviven gracias a tipos bajos artificiales, compras públicas dirigidas y subsidios encadenados. En ese entorno, muchas PYMES —más vulnerables, menos conectadas al poder político y con acceso limitado al crédito— compiten en clara desventaja estructural. El mercado ya no premia al más eficiente, sino al mejor conectado.': 'The second article examined the growth trap: large, inefficient companies surviving on artificially low rates, directed public procurement and successive subsidies. In that environment, many SMEs—more vulnerable, less connected to political power and with limited access to credit—compete at a clear structural disadvantage. The market no longer rewards the most efficient, but the best connected.',
        'El agotamiento de la clase media': 'The Exhaustion of the Middle Class',
        'Pero ¿qué ocurre cuando esa trampa deja de ser solo empresarial y se traslada a las personas? La respuesta está en un síntoma que se repite en toda Europa, y de forma más aguda en España: el agotamiento de la clase media.': 'But what happens when this trap moves beyond companies and reaches individuals? The answer lies in a symptom repeated across Europe, and more acutely in Spain: the exhaustion of the middle class.',
        'En los años 60, un joven podía aspirar a una vivienda, un coche, una familia. Hoy, ese horizonte se ha convertido en un privilegio. El acceso a la vivienda es prohibitivo, la natalidad se desploma, y el perro reemplaza al hijo en los balcones urbanos. El trabajo ya no garantiza autonomía, sino supervivencia compartida. La acción humana ya no proyecta: se limita a resistir.': 'In the 1960s, a young person could aspire to a home, a car and a family. Today, that horizon has become a privilege. Housing is prohibitively expensive, birth rates are collapsing, and dogs replace children on urban balconies. Work no longer guarantees autonomy, only shared survival. Human action no longer projects into the future; it merely endures.',
        'El desplazamiento del protagonismo': 'The Shift in Agency',
        'La pérdida de horizonte no es solo un fenómeno interno. El desplazamiento del poder económico hacia Asia no implica solo fábricas o inversiones: supone también que las decisiones, las oportunidades y las expectativas se están moviendo lejos de nosotros. Y con ellas, el sentido de protagonismo que antes tenía Occidente.': 'This loss of horizon is not solely an internal phenomenon. The shift of economic power towards Asia involves more than factories and investment: decisions, opportunities and expectations are moving away from us as well. With them goes the sense of agency once held by the West.',
        'Mientras Oriente acumula músculo productivo y visión estratégica, Occidente se dispersa en narrativas, subsidios y regulaciones infinitas. Europa, sin una estrategia industrial real, queda atrapada en la inercia de un estado de bienestar sobrecargado y políticamente bloqueado, donde cada intento de reforma choca con resistencias cruzadas. España, más vulnerable aún, corre el riesgo de ser arrojada por la fuerza centrífuga de ese giro global y terminar relegada al final de todos los rankings relevantes.': 'While the East builds productive strength and strategic vision, the West disperses itself across narratives, subsidies and endless regulation. Without a genuine industrial strategy, Europe is trapped by the inertia of an overloaded and politically gridlocked welfare state, where every attempt at reform meets resistance from all sides. Spain, more vulnerable still, risks being flung outward by the centrifugal force of this global turn and relegated to the bottom of every meaningful ranking.',
        'El individuo como espectador': 'The Individual as Spectator',
        'No se trata solo de economía, sino de orientación. En un entorno donde el Estado sustituye al mercado, y la renta sustituye al salario, la acción humana se desdibuja. En ausencia de incentivos reales, y bajo la consigna de "no tendrás nada y serás feliz", el individuo deja de actuar como sujeto económico para convertirse en espectador de su propia deriva.': 'This is not only about economics, but about direction. In an environment where the state replaces the market and transfers replace wages, human action loses definition. Without genuine incentives, and under the slogan “you will own nothing and be happy”, the individual ceases to act as an economic subject and becomes a spectator to their own drift.',
        'Así se cierra esta trilogía con una invitación a la reflexión: no es solo el sistema el que colapsa, es el actor el que se fractura. Y cuando eso ocurre, ya no importa que el escenario siga en pie: la función ha terminado.': 'This trilogy therefore closes with an invitation to reflect: it is not only the system that collapses; the actor fractures too. And when that happens, it no longer matters that the stage remains standing: the performance is over.',
        '← La trampa del crecimiento': '← The Growth Trap'
      }
    },
    'articulo4.html': {
      title: 'The Chainsaw Without a Doctrine — Víctor Saavedra',
      description: 'A necessary fiscal adjustment carried out through methods no serious doctrine can justify. Four cases from Argentina’s current government.',
      strings: {
        'Artículo de opinión · Junio de 2026': 'Opinion · June 2026',
        'La motosierra sin doctrina': 'The Chainsaw Without a Doctrine',
        'La pregunta llega siempre con la trampa puesta: si eres libertario, ¿defiendes esto? Y «esto» es un hombre en silla de ruedas que pierde su pensión sin que nadie se lo notifique, o cinco mil toneladas de alimento envejeciendo en un almacén mientras una olla popular raspa el fondo. La trampa funciona porque confunde el principio con su ejecución, como si cuestionar cómo se hace algo obligara a renegar de por qué se hace.': 'The question always arrives with the trap already set: if you are a libertarian, do you defend this? And “this” is a man in a wheelchair losing his pension without being notified, or five thousand tonnes of food ageing in a warehouse while a community kitchen scrapes the bottom of its pot. The trap works because it confuses principle with execution, as though questioning how something is done required renouncing why it is done.',
        'Conviene decirlo de entrada, para no repetirlo después: lo que sigue se apoya en normas públicas, actuaciones judiciales y denuncias atribuidas a sus fuentes. No imputo delitos ni doy por probadas las acusaciones pendientes de resolución judicial. Cuestiono decisiones, no personas.': 'It is worth stating at the outset: what follows rests on public rules, court proceedings and allegations attributed to their sources. I neither accuse anyone of a crime nor treat allegations awaiting judicial resolution as proven. I question decisions, not people.',
        'El ajuste argentino era necesario: ningún Estado sostiene de forma indefinida el déficit, la deuda y la inflación con la que se gobernó este país durante años. Pero que el destino sea necesario no santifica cualquier camino. La tradición liberal, la que el propio oficialismo reivindica, de Hayek a Huerta de Soto, no se agota en reducir el Estado: exige garantizar el marco en que cada persona puede actuar libremente y donde el individuo es el centro de la sociedad.': 'Argentina’s adjustment was necessary: no state can indefinitely sustain the deficit, debt and inflation under which the country was governed for years. But a necessary destination does not sanctify every road towards it. The liberal tradition invoked by the government itself—from Hayek to Huerta de Soto—does not end with reducing the state; it requires a framework in which each person can act freely and the individual remains at the centre of society.',
        'La tesis de este artículo resulta incómoda tanto para quienes justifican toda decisión del Gobierno, como para quienes niegan que Argentina necesitara corregir sus desequilibrios: algunas de las ejecuciones más cuestionables del actual Gobierno argentino no representan un exceso de liberalismo, sino una renuncia a los límites que el propio liberalismo impone al poder del Estado.': 'This article’s thesis is uncomfortable both for those who justify every government decision and for those who deny that Argentina needed to correct its imbalances: some of the current government’s most questionable actions represent not an excess of liberalism, but an abandonment of the limits that liberalism itself places on state power.',
        'Cuatro casos lo muestran. Cada uno encarna un fallo distinto; juntos dibujan un patrón.': 'Four cases demonstrate this. Each embodies a different failure; together they reveal a pattern.',
        'I. Los alimentos inmovilizados': 'I. Food Held in Storage',
        'El fallo · Destrucción de valor': 'The failure · Destruction of value',
        'Es legítimo revisar las transferencias a organizaciones sociales con rasgos de gestión opaca. Auditar esos circuitos y sustituir los que se prestan al clientelismo es un objetivo primordial.': 'It is legitimate to review transfers to social organisations marked by opaque management. Auditing those channels and replacing those vulnerable to patronage is a vital objective.',
        'Lo que trascendió a la opinión pública en 2024 fue otra cosa. El Ministerio de Capital Humano mantenía inmovilizadas más de cinco mil toneladas de alimentos en depósitos de Villa Martelli y Tafí Viejo, con partidas próximas a su fecha de caducidad. El Ministerio adujo que parte era stock de emergencia. Pero comedores y organizaciones denunciaron que la comida se echaba a perder mientras faltaba en los barrios. La Justicia federal intervino: el juez Casanello reclamó un plan de distribución, y el Gobierno, en vez de desarrollar uno, recurrió la intervención.': 'What emerged publicly in 2024 was something else. The Ministry of Human Capital was holding more than five thousand tonnes of food in warehouses in Villa Martelli and Tafí Viejo, some close to expiry. The Ministry argued that part of it was emergency stock. Yet community kitchens and organisations reported that food was spoiling while neighbourhoods went without. The federal courts intervened: Judge Casanello requested a distribution plan and, instead of producing one, the government appealed the intervention.',
        'El gasto estaba hecho. Cada caja vencida es dinero público que se evapora. Un Gobierno puede negarse a comprar más; lo que no puede es presentar como eficiencia su incapacidad para repartir lo que ya tiene. Eso no es austeridad: es desperdicio con relato.': 'The money had already been spent. Every expired box is public money evaporating. A government may refuse to buy more; it cannot present its inability to distribute what it already owns as efficiency. That is not austerity. It is waste wrapped in a narrative.',
        'II. Las pensiones auditadas sin garantías': 'II. Disability Pensions Audited Without Safeguards',
        'El fallo · Indefensión': 'The failure · Denial of due process',
        'Las pensiones no contributivas por invalidez habían crecido de forma llamativa: su cobertura pasó, según datos oficiales, de algo más del 18% al 41% de los titulares de certificado de discapacidad entre 2018 y 2022. Revisarlas era sensato. Auditar no es perseguir: es comprobar que quien cobra cumple las condiciones.': 'Non-contributory disability pensions had grown markedly: according to official data, coverage rose from just over 18% to 41% of disability-certificate holders between 2018 and 2022. Reviewing them was sensible. An audit is not persecution; it verifies that recipients meet the conditions.',
        'El problema fue el procedimiento. La auditoría avanzó con citaciones que no llegaban, domicilios equivocados y beneficiarios que supieron que habían perdido la prestación el día que no les entró el dinero. Una de las resoluciones la derogó la propia Agencia Nacional de Discapacidad, que a su vez acumulaba denuncias por presuntas irregularidades.': 'The problem was the procedure. The audit proceeded with notices that never arrived, incorrect addresses and beneficiaries who discovered that they had lost the payment only when the money failed to appear. One resolution was repealed by the National Disability Agency itself, which was in turn facing allegations of irregularities.',
        'Una notificación no es efectiva porque el Estado haya enviado una carta. Lo es cuando el destinatario ha podido conocerla y responder. Quitar un ingreso básico a quien no tuvo ocasión de defenderse no es rigor: es dejar indefenso al más débil y llamarlo procedimiento.': 'A notice is not effective merely because the state sent a letter. It is effective when the recipient has been able to learn of it and respond. Removing a basic income from someone who had no opportunity to defend themselves is not rigour; it is leaving the weakest defenceless and calling it procedure.',
        'III. El Garrahan': 'III. Garrahan Hospital',
        'El fallo · Descapitalización': 'The failure · Erosion of institutional capital',
        'Ninguna institución debe escapar al control del gasto, ni siquiera la de mayor prestigio. El Garrahan, hospital pediátrico de alta complejidad y referencia en América Latina, no es una excepción. El problema es que se recortó por donde era más fácil: la partida de personal. Y en una institución como el Garrahan, el personal no es un gasto: es el activo.': 'No institution should escape spending controls, not even the most prestigious. Garrahan, a highly complex paediatric hospital and a reference point in Latin America, is no exception. The problem is that cuts were made where it was easiest: staffing. In an institution such as Garrahan, staff are not an expense; they are the asset.',
        'Entre 2024 y 2025, asociaciones profesionales y sindicales reportaron más de doscientas renuncias por deterioro salarial. Las cifras varían según la fuente; lo que no se discute es que hubo un conflicto serio y una fuga de profesionales especializados.': 'Between 2024 and 2025, professional and trade-union associations reported more than two hundred resignations due to declining pay. Figures vary by source; what is undisputed is that there was a serious conflict and an exodus of specialists.',
        'El reproche es interno al propio liberalismo. Si la convicción era que el Estado no debe gestionar un hospital, la vía coherente era tramitar una privatización ordenada: tasar el activo, transferir su gestión y garantizar la continuidad asistencial. Mantenerlo público y vaciarlo por congelación salarial no es una política: es una negligencia. Un equipo clínico no es la suma intercambiable de sus miembros: cuando se fragmenta, se pierde un capital que tardó décadas en formarse y que, disperso, no se recompra.': 'The criticism comes from within liberalism itself. If the conviction was that the state should not run a hospital, the coherent path was an orderly privatisation: value the asset, transfer its management and guarantee continuity of care. Keeping it public while hollowing it out through frozen salaries is not a policy; it is negligence. A clinical team is not the interchangeable sum of its members. When it fragments, capital built over decades is lost, and once dispersed it cannot simply be bought back.',
        'IV. La DADSE y los medicamentos de alto costo': 'IV. DADSE and High-Cost Medicines',
        'El fallo · Desabastecimiento': 'The failure · Supply disruption',
        'Este es el caso más grave, porque toca terapias que no admiten demora. La compra de medicamentos oncológicos y de alto costo es terreno fértil para la sobrefacturación, y auditarla era razonable.': 'This is the most serious case because it concerns treatments that cannot wait. Procurement of cancer and other high-cost medicines is fertile ground for overbilling, and auditing it was reasonable.',
        'La Dirección de Asistencia Directa por Situaciones Especiales fue intervenida y luego reemplazada dentro de una nueva estructura del Ministerio de Salud (Decreto 1138/2024). Durante el proceso, pacientes y organizaciones denunciaron retrasos en la entrega. Los tribunales dictaron medidas cautelares para asegurar tratamientos concretos. Algunas organizaciones llegaron a vincular las demoras con fallecimientos: es una denuncia que merece atención, no una causalidad probada.': 'The Directorate for Direct Assistance in Special Situations was placed under intervention and later replaced within a new Ministry of Health structure (Decree 1138/2024). During the process, patients and organisations reported delivery delays. Courts issued interim measures to secure specific treatments. Some organisations linked the delays to deaths: an allegation that deserves attention, not a proven causal relationship.',
        'No diré que la reorganización provocó muertes. Diré algo más sobrio: se interrumpió un suministro vital antes de tener listo el que iba a sustituirlo. El plazo de una auditoría y el plazo de un cáncer no son el mismo plazo. La legitimidad del control termina donde empieza una interrupción evitable del tratamiento.': 'I will not say that the reorganisation caused deaths. I will make a more restrained point: a vital supply was interrupted before its replacement was ready. The timetable of an audit is not the timetable of cancer. The legitimacy of oversight ends where an avoidable interruption of treatment begins.',
        'El patrón': 'The Pattern',
        'Cuatro casos, cuatro fallos. Destrucción de valor cuando se dejó caducar la comida ya comprada. Indefensión cuando se quitó un derecho sin notificación real ni ocasión de defenderse. Descapitalización cuando se vació el hospital sin privatizarlo ni financiarlo. Y desabastecimiento cuando se cortó un tratamiento antes de tener el sustituto. Ninguno de estos fallos se deduce de la austeridad ni del liberalismo: son fallos de instrumento.': 'Four cases, four failures. Destruction of value when already-purchased food was allowed to expire. Denial of due process when a benefit was removed without genuine notice or an opportunity to respond. Erosion of institutional capital when a hospital was hollowed out without being privatised or funded. And supply disruption when treatment was cut before a replacement existed. None of these failures follows from austerity or liberalism; they are failures of method.',
        'Hay intervenciones que admiten velocidad y contundencia. Y hay intervenciones que exigen precisión quirúrgica: identificar con exactitud qué se corta, en qué orden y con qué garantías para quien queda afectado. Aplicar la motosierra donde hacía falta el bisturí no es un exceso de reforma: es un error de diagnóstico. Y los errores de diagnóstico los pagan siempre los mismos.': 'Some interventions allow speed and force. Others demand surgical precision: identifying exactly what is cut, in what order and with what safeguards for those affected. Using a chainsaw where a scalpel was required is not an excess of reform; it is a diagnostic error. And the same people always pay for diagnostic errors.',
        'La conclusión': 'Conclusion',
        'Limitar el Estado no es solo reducirlo: es impedir que actúe a su antojo. Exige que notifique, que motive sus decisiones, que deje defenderse al ciudadano y que responda por lo que administra. La coherencia de una doctrina se mide cuando sus principios atan también a quienes la invocan.': 'Limiting the state is not only about making it smaller; it is about preventing it from acting at will. It requires the state to give notice, explain its decisions, allow citizens to defend themselves and answer for what it administers. A doctrine’s coherence is tested when its principles also bind those who invoke it.',
        'El imperio de la ley no es una traba que se aparta cuando estorba a la reforma: es la línea que separa transformar de atropellar. La motosierra que respeta esa línea corta privilegios, gasto improductivo y redes clientelares. La que cita a domicilios fantasma, vacía hospitales sin reemplazo y deja caducar la comida no reduce la peor versión del Estado: la repite. Y cuando la herramienta que venía a terminar con el abuso adopta sus métodos, lo que se corta ya no es gasto: es la seguridad jurídica, la confianza en las instituciones y la legitimidad del propio ajuste.': 'The rule of law is not an obstacle to be moved aside when it gets in the way of reform; it is the line separating transformation from abuse. A chainsaw that respects that line cuts privileges, unproductive spending and patronage networks. One that sends notices to phantom addresses, hollows out hospitals without replacement and lets food expire does not reduce the worst version of the state; it repeats it. And when the tool meant to end abuse adopts its methods, what gets cut is no longer spending, but legal certainty, trust in institutions and the legitimacy of the adjustment itself.',
        'Fuentes por caso': 'Sources by case',
        'Caso I. Los alimentos inmovilizados:': 'Case I. Food held in storage:',
        'Caso II. Las pensiones auditadas sin garantías:': 'Case II. Disability pensions audited without safeguards:',
        'Caso III. El Garrahan:': 'Case III. Garrahan Hospital:',
        'Caso IV. La DADSE y los medicamentos de alto costo:': 'Case IV. DADSE and high-cost medicines:',
        'La Nación, 1 de junio de 2024:': 'La Nación, 1 June 2024:',
        '· Infobae, 1 de junio de 2024:': '· Infobae, 1 June 2024:',
        'Chequeado, agosto de 2025:': 'Chequeado, August 2025:',
        '· ACIJ, agosto de 2025:': '· ACIJ, August 2025:',
        'Fundación Soberanía Sanitaria, julio de 2025:': 'Fundación Soberanía Sanitaria, July 2025:',
        '· Revista Noticias, junio de 2025:': '· Revista Noticias, June 2025:',
        'Perfil, enero de 2025:': 'Perfil, January 2025:',
        '· Decreto 1138/24, Boletín Oficial, 30 de diciembre de 2024.': '· Decree 1138/24, Official Gazette, 30 December 2024.',
        '← Todos los artículos': '← All articles',
        'Siguiente artículo →': 'Next article →'
      }
    },
    'ensayo.html': {
      title: 'The Intelligent Investor Is Dead — Víctor Saavedra',
      description: 'A critical essay on the limits of classical fundamental analysis in nonlinear business ecosystems.'
    },
    'naf.html': {
      title: 'Neural Arbitration Framework — Víctor Saavedra',
      description: 'A conceptual architecture and research agenda for epistemic arbitration in large language models.'
    },
    'simulador-canales-inversion.html': {
      title: 'Investment Channels Simulator · Víctor Saavedra',
      strings: simulatorStrings('Investment Channels Simulator')
    },
    'simulador-canales-inversion-intermedio.html': {
      title: 'Investment Channels Simulator · Intermediate Level · Víctor Saavedra',
      strings: simulatorStrings('Investment Channels Simulator · Intermediate Level')
    }
  };

  function simulatorStrings(pageTitle) {
    return {
      'Simulador de Canales de Inversión': pageTitle,
      'Simulador de Canales de Inversión · Nivel Intermedio': pageTitle,
      'Glosario': 'Glossary',
      'Cerrar ✕': 'Close ✕',
      'Términos del simulador': 'Simulator terms',
      'Buscar un término (ej. VIX, MOVE, REIT)...': 'Search for a term (e.g. VIX, MOVE, REIT)...',
      'Simulador con fines exclusivamente educativos. Las variables macroeconómicas del entorno de simulación se generan de forma sintética y no reflejan datos de mercado reales ni previsiones. Ninguna decisión adoptada dentro de este simulador constituye, ni debe interpretarse como, asesoramiento o recomendación de inversión.': 'This simulator is for educational purposes only. Its macroeconomic variables are generated synthetically and do not reflect real market data or forecasts. No decision made within this simulator constitutes, or should be interpreted as, investment advice or a recommendation.',
      'Canales': 'Channels', 'Variables macro': 'Macro variables', 'Tu perfil': 'Your profile', 'Simulación': 'Simulation', 'Resumen': 'Summary',
      'Simulador educativo': 'Educational simulator',
      'Canales de inversión\nfrente al ciclo macroeconómico': 'Investment channels\nacross the macroeconomic cycle',
      'Aprende qué es cada canal de inversión, elige o construye una cartera, y observa cómo reaccionarías tú cuando el entorno macroeconómico cambia con el tiempo.': 'Learn what each investment channel is, choose or build a portfolio, and see how you would respond as the macroeconomic environment changes over time.',
      'El recorrido tiene cuatro etapas:': 'The journey has four stages:',
      'Canales de inversión': 'Investment channels',
      'frente al ciclo macroeconómico': 'across the macroeconomic cycle',
      'Qué son, qué riesgo asumen y a qué variables macro son sensibles.': 'What they are, which risks they bear and which macro variables affect them.',
      'Los indicadores que moverán el entorno de la simulación.': 'The indicators that will drive the simulation environment.',
      'Un perfil predefinido o una cartera construida por ti.': 'A predefined profile or a portfolio you build yourself.',
      'Seis rondas en las que el entorno cambia y tú decides cómo reasignar.': 'Six rounds in which the environment changes and you decide how to reallocate.',
      'Empezar': 'Start', 'Volver': 'Back', 'Riesgo principal': 'Main risk',
      'Liquidez / Monetario': 'Cash / Money market',
      'Renta Fija Gobierno': 'Government bonds',
      'Renta Fija Corporativa': 'Corporate bonds',
      'Mixto Defensivo': 'Defensive multi-asset',
      'Renta Variable': 'Equities',
      'Inmobiliario (REITs / SOCIMIs)': 'Real estate (REITs / SOCIMIs)',
      'Oro / Materias primas': 'Gold / Commodities',
      'Criptoactivos': 'Cryptoassets',
      'Fondos monetarios y depósitos a corto plazo invertidos en deuda pública y bancaria de vencimiento inferior a un año. Prioriza la preservación de capital y la disponibilidad inmediata.': 'Money-market funds and short-term deposits invested in government and bank debt maturing in less than one year. They prioritise capital preservation and immediate availability.',
      'Deuda soberana de países desarrollados, con vencimientos de corto a largo plazo.': 'Sovereign debt issued by developed countries, with maturities ranging from short to long term.',
      'Deuda emitida por empresas, con una prima sobre la deuda pública que compensa el riesgo de impago.': 'Debt issued by companies, offering a premium over government debt to compensate for default risk.',
      'Fondos que combinan renta fija y renta variable con objetivo de preservación de capital y baja volatilidad.': 'Funds combining fixed income and equities with the aim of preserving capital and maintaining low volatility.',
      'Participación en el capital de empresas cotizadas.': 'Ownership interests in listed companies.',
      'Vehículos cotizados que invierten en activos inmobiliarios y reparten rentas vía alquileres.': 'Listed vehicles that invest in real estate and distribute rental income.',
      'Activos reales sin flujo de caja propio, empleados tradicionalmente como reserva de valor.': 'Real assets with no cash flow of their own, traditionally used as a store of value.',
      'Activos digitales sin respaldo de flujos de caja ni de un emisor soberano o corporativo, de elevada volatilidad.': 'Highly volatile digital assets with no backing from cash flows or a sovereign or corporate issuer.',
      'Coste de oportunidad en fases de expansión': 'Opportunity cost during expansionary phases',
      'Riesgo de duración: el precio reacciona de forma inversa a los tipos': 'Duration risk: prices move inversely to interest rates',
      'Riesgo de crédito (spread) además del de duración': 'Credit-spread risk in addition to duration risk',
      'Riesgo combinado moderado, dependiente de la gestión activa': 'Moderate combined risk, dependent on active management',
      'Riesgo de mercado y de beneficios empresariales': 'Market and corporate-earnings risk',
      'Sensibilidad a tipos de interés y al ciclo económico': 'Sensitivity to interest rates and the economic cycle',
      'No genera rentas; su precio depende de la demanda como cobertura': 'Produces no income; its price depends on demand for hedging',
      'Volatilidad extrema y ausencia de anclaje fundamental estable': 'Extreme volatility and no stable fundamental anchor',
      'Los tipos oficiales fijan directamente su rentabilidad. Suele recibir flujos cuando el PMI se deteriora o el VIX repunta con fuerza.': 'Policy rates directly determine returns. It often receives inflows when PMI deteriorates or the VIX rises sharply.',
      'Los tipos oficiales fijan directamente su rentabilidad. Suele recibir flujos cuando el PMI se deteriora, sube el paro o el VIX repunta con fuerza.': 'Policy rates directly determine returns. It often receives inflows when PMI deteriorates, unemployment rises or the VIX rises sharply.',
      'Los tipos oficiales y el bono a 10 años marcan directamente su precio por efecto duración. La inflación erosiona su rentabilidad real.': 'Policy rates and the ten-year bond yield directly affect its price through duration. Inflation erodes its real return.',
      'Los tipos oficiales, el bono a 10 años y las expectativas de tipos marcan directamente su precio por efecto duración. La inflación subyacente erosiona su rentabilidad real, y la deuda pública acumulada presiona la prima exigida a largo plazo.': 'Policy rates, the ten-year bond yield and rate expectations directly affect its price through duration. Core inflation erodes its real return, while accumulated public debt puts pressure on the long-term premium required by investors.',
      'Además del riesgo de duración, incorpora riesgo de crédito: se resiente cuando el PIB o el PMI se deterioran y las revisiones de beneficios empeoran.': 'Alongside duration risk, it carries credit risk: it suffers when GDP or PMI deteriorates and earnings revisions worsen.',
      'Además del riesgo de duración, incorpora riesgo de crédito: se resiente cuando el spread de crédito corporativo se ensancha, el PIB o el PMI se deterioran, o las revisiones de beneficios empeoran.': 'Alongside duration risk, it carries credit risk: it suffers when corporate credit spreads widen, GDP or PMI deteriorates, or earnings revisions worsen.',
      'Sensibilidad atenuada al conjunto de variables; funciona como amortiguador entre fases de mercado.': 'Reduced sensitivity to the full set of variables; it acts as a buffer between market phases.',
      'El PMI y las revisiones de beneficios adelantan el ciclo de resultados. El VIX fija la prima de riesgo exigida; los tipos oficiales y el bono a 10 años, el coste de capital.': 'PMI and earnings revisions lead the profit cycle. The VIX determines the required risk premium, while policy rates and the ten-year bond yield shape the cost of capital.',
      'El PMI y las revisiones de beneficios adelantan el ciclo de resultados; la tasa de paro lo confirma con rezago. El VIX fija la prima de riesgo exigida; los tipos oficiales, las expectativas de tipos y el bono a 10 años, el coste de capital.': 'PMI and earnings revisions lead the profit cycle, while unemployment confirms it with a lag. The VIX determines the required risk premium; policy rates, rate expectations and the ten-year bond yield shape the cost of capital.',
      'El bono a 10 años y los tipos oficiales encarecen su financiación y presionan su valoración por descuento de flujos. El PIB determina la demanda de espacio.': 'The ten-year bond yield and policy rates increase financing costs and put pressure on discounted valuations. GDP determines demand for space.',
      'VIX elevado (activo refugio en episodios de estrés), inflación al alza (cobertura), y el bono a 10 años como coste de oportunidad de mantenerlo.': 'A high VIX (safe-haven demand during stress), rising inflation (hedging), and the ten-year bond yield as the opportunity cost of holding it.',
      'VIX elevado (activo refugio en episodios de estrés), inflación subyacente al alza (cobertura), y el bono a 10 años como coste de oportunidad de mantenerlo.': 'A high VIX (safe-haven demand during stress), rising core inflation (hedging), and the ten-year bond yield as the opportunity cost of holding it.',
      'Correlación positiva reciente con el apetito global de riesgo (VIX) y con la liquidez (tipos oficiales), pero sin relación macro estable ni contrastada a largo plazo: es la variable menos predecible del conjunto.': 'A recent positive correlation with global risk appetite (VIX) and liquidity (policy rates), but no stable, well-established long-term macro relationship: it is the least predictable variable in the set.',
      'PIB real': 'Real GDP', 'Inflación': 'Inflation', 'Inflación subyacente': 'Core inflation', 'Tasa de paro': 'Unemployment rate',
      'Déficit público': 'Public deficit', 'Deuda pública': 'Public debt', 'Tipos oficiales': 'Policy rates', 'PMI compuesto': 'Composite PMI',
      'Expectativas de tipos': 'Rate expectations', 'Bono soberano 10 años': '10-year sovereign bond', 'Revisiones de beneficios': 'Earnings revisions',
      'Spread de crédito corporativo': 'Corporate credit spread',
      'Producto Interior Bruto real: el crecimiento o la contracción de la economía, descontando el efecto de los precios. Variable coincidente y algo rezagada: confirma el ciclo más que lo anticipa.': 'Real gross domestic product: economic growth or contraction after removing the effect of prices. A coincident and somewhat lagging variable, it confirms the cycle more than it anticipates it.',
      'Producto Interior Bruto real: el crecimiento o la contracción de la economía, descontando el efecto de los precios. Marca el tono general del ciclo económico.': 'Real gross domestic product: economic growth or contraction after removing the effect of prices. It sets the overall tone of the economic cycle.',
      'Evolución general de los precios (IPC interanual). Condiciona el poder adquisitivo, la política monetaria y la valoración de los activos.': 'The general evolution of prices (year-on-year CPI). It shapes purchasing power, monetary policy and asset valuations.',
      'Presiones de precios más persistentes, excluyendo los componentes más volátiles (energía y alimentos frescos). Es la referencia que de verdad sigue un banco central para decidir sobre los tipos.': 'More persistent price pressures excluding the most volatile components, such as energy and fresh food. This is the measure central banks closely follow when deciding on rates.',
      'Fortaleza o debilidad del mercado laboral. Afecta al consumo, a los salarios, y es uno de los mejores indicadores del riesgo de recesión.': 'The strength or weakness of the labour market. It affects consumption and wages and is one of the best indicators of recession risk.',
      'Diferencia entre gastos e ingresos públicos, en porcentaje del PIB. Funciona como proxy del impulso fiscal: puede estimular la economía a corto plazo a costa de presionar la financiación pública.': 'The difference between public spending and revenue as a percentage of GDP. It serves as a proxy for fiscal stimulus: it can support the economy in the short term at the cost of pressure on public financing.',
      'Diferencia entre gastos e ingresos públicos, en porcentaje del PIB. Puede estimular la economía a corto plazo, a costa de presionar la financiación pública.': 'The difference between public spending and revenue as a percentage of GDP. It can support the economy in the short term at the cost of pressure on public financing.',
      'Nivel acumulado de endeudamiento público, en porcentaje del PIB. A diferencia del déficit (el desequilibrio de un solo año), es una variable de fondo que se mueve despacio y afecta a la sostenibilidad fiscal y a la prima de riesgo exigida.': 'Accumulated public debt as a percentage of GDP. Unlike the deficit, which is a one-year imbalance, it is a slow-moving background variable affecting fiscal sustainability and the required risk premium.',
      'Precio oficial del dinero fijado por el banco central. Afecta al coste de financiación, a los bonos y a la valoración de la renta variable.': 'The official price of money set by the central bank. It affects financing costs, bonds and equity valuations.',
      'Precio oficial del dinero fijado por el banco central (BCE / Fed). Afecta al coste de financiación, a los bonos y a la valoración de la renta variable.': 'The official price of money set by the central bank (ECB / Fed). It affects financing costs, bonds and equity valuations.',
      'Índice de difusión basado en encuestas a directores de compras, que anticipa la actividad empresarial a través de pedidos, producción y expectativas. Suele avisar de cambios de ciclo antes que el PIB.': 'A diffusion index based on surveys of purchasing managers that anticipates business activity through orders, output and expectations. It often signals turning points before GDP.',
      'Índice compuesto basado en encuestas a directores de compras, que anticipa la actividad empresarial a través de pedidos, producción y expectativas. Suele avisar de cambios de ciclo antes que el PIB.': 'A composite index based on surveys of purchasing managers that anticipates business activity through orders, output and expectations. It often signals turning points before GDP.',
      'Lo que el mercado descuenta sobre las próximas subidas o bajadas de tipos, no el tipo oficial vigente ahora mismo. Los activos suelen reaccionar antes al cambio esperado que al cambio efectivo.': 'What the market prices in for forthcoming rate increases or cuts, rather than the policy rate currently in force. Assets often react to an expected change before the change actually occurs.',
      'Rentabilidad exigida por el mercado para prestar al Estado a diez años. Referencia central para el coste del dinero a largo plazo; afecta a bonos, acciones e inmobiliario.': 'The return the market requires to lend to the state for ten years. A central reference for the long-term cost of money, it affects bonds, equities and real estate.',
      'Balance neto entre analistas que elevan y que recortan sus estimaciones de beneficios empresariales. Síntesis de cómo la economía se traslada a las cuentas de las empresas.': 'The net balance between analysts raising and cutting corporate earnings estimates. It summarises how the economy is feeding through to company accounts.',
      'Balance neto entre analistas que elevan y que recortan sus estimaciones de beneficios empresariales. Uno de los mejores termómetros adelantados para la renta variable.': 'The net balance between analysts raising and cutting corporate earnings estimates. One of the best leading gauges for equities.',
      'Prima que exige el mercado para prestar a empresas en vez de al Estado. Se amplía cuando se detecta un deterioro real del riesgo financiero y crediticio, con frecuencia antes de que se note en otros indicadores.': 'The premium the market requires to lend to companies rather than the state. It widens when financial and credit risk genuinely deteriorates, often before this becomes visible in other indicators.',
      'Índice de volatilidad implícita del S&P 500. Actúa principalmente como sensor de estrés financiero: consecuencia de otras variables más que motor de la economía.': 'The S&P 500 implied-volatility index. It acts primarily as a sensor of financial stress: more a consequence of other variables than a driver of the economy.',
      'Volatilidad implícita esperada de la renta variable. Mide la tensión y la aversión al riesgo del mercado; actúa más como sensor que como motor de la economía.': 'Expected implied volatility in equities. It measures market stress and risk aversion, acting more as a sensor than a driver of the economy.',
      'I. Conceptos': 'I. Concepts', 'II. Conceptos': 'II. Concepts',
      'Los canales de inversión': 'Investment channels',
      'Ocho vehículos con perfiles de riesgo y sensibilidad macro distintos. Entenderlos es el paso previo a decidir cómo combinarlos.': 'Eight vehicles with different risk profiles and macro sensitivities. Understanding them is the first step towards deciding how to combine them.',
      'Continuar → Variables macro': 'Continue → Macro variables',
      'Las variables macro del simulador': 'The simulator’s macro variables',
      'Ocho indicadores organizados en cinco canales: macroeconomía, política monetaria, política fiscal, mercados y beneficios empresariales. No se mueven de forma independiente: cada uno afecta a los demás según relaciones de causa y efecto, con distinta intensidad y con desfases de hasta dos trimestres.': 'Eight indicators organised into five channels: macroeconomics, monetary policy, fiscal policy, markets and corporate earnings. They do not move independently: each affects the others through cause-and-effect relationships of differing intensity and with lags of up to two quarters.',
      'Los umbrales de semáforo (verde / ámbar / rojo) usados en el simulador son una simplificación pedagógica y no sustituyen la lectura profesional de estos indicadores.': 'The traffic-light thresholds (green / amber / red) used in the simulator are an educational simplification and do not replace professional interpretation of these indicators.',
      'Continuar → Tu perfil': 'Continue → Your profile',
      'III. Tu punto de partida': 'III. Your starting point',
      'Elige un perfil o construye tu propia cartera': 'Choose a profile or build your own portfolio',
      'Este será tu punto de partida antes de que el entorno macro empiece a moverse.': 'This will be your starting point before the macro environment begins to move.',
      'Conservador': 'Conservative', 'Moderado': 'Moderate', 'Arriesgado': 'Adventurous', 'Caso propio': 'Custom portfolio',
      'Preservación de capital ante todo. Baja tolerancia a oscilaciones de valor.': 'Capital preservation above all. Low tolerance for fluctuations in value.',
      'Busca crecimiento con amortiguadores defensivos activos.': 'Seeks growth with active defensive buffers.',
      'Prioriza el crecimiento a largo plazo y tolera oscilaciones significativas.': 'Prioritises long-term growth and tolerates significant fluctuations.',
      'Define tú mismo la asignación inicial entre los ocho canales.': 'Set the initial allocation across the eight channels yourself.',
      'Semilla del escenario (opcional)': 'Scenario seed (optional)',
      'Misma semilla → mismo escenario. Útil para reproducir el ejercicio con un grupo.': 'Same seed → same scenario. Useful for repeating the exercise with a group.',
      'Empezar simulación': 'Start simulation', 'Defensivos': 'Defensive', 'Riesgo': 'Risk',
      'IV. Simulación': 'IV. Simulation', 'El entorno cambia. ¿Cómo reasignas?': 'The environment changes. How do you reallocate?',
      '6 rondas trimestrales': '6 quarterly rounds',
      'Cada una plantea un caso habitual distinto: una situación deliberadamente clara, para que puedas relacionar lo que ves en el panel con la decisión que le corresponde. No te decimos cuál es el ajuste habitual hasta la ronda siguiente — reacciona primero con lo que ves. Al terminar la sexta ronda verás el recorrido completo, con el ajuste habitual de cada caso junto al tuyo.': 'Each presents a different typical case: a deliberately clear situation that lets you connect what you see on the dashboard with the corresponding decision. The usual adjustment is not revealed until the following round—respond first to what you can see. After the sixth round, you will see the complete journey, with the usual adjustment for each case alongside your own.',
      'Tu asignación para esta ronda': 'Your allocation for this round',
      'Terminar aquí y ver resumen': 'Finish here and view summary', 'Confirmar reasignación →': 'Confirm reallocation →',
      'Panel macro': 'Macro dashboard', 'Toca un indicador para ver su definición.': 'Select an indicator to view its definition.',
      'V. Resumen': 'V. Summary', 'Todavía no hay nada que resumir': 'There is nothing to summarise yet',
      'Aún no has completado ninguna ronda de la simulación. Ve a la fase IV para empezar.': 'You have not completed a simulation round yet. Go to phase IV to begin.',
      'Ir a la simulación →': 'Go to simulation →', 'Recorrido del escenario': 'Scenario journey',
      'Recorrido de casos habituales': 'Sequence of typical cases', 'Evolución de tu asignación': 'Evolution of your allocation',
      'Balance de comportamiento': 'Behaviour summary', 'Patrón dominante': 'Dominant pattern',
      'Observaciones por ronda': 'Observations by round', 'Reiniciar simulador': 'Restart simulator',
      'Sin observaciones relevantes en esta ronda.': 'No relevant observations in this round.',
      'Coincide con el ajuste habitual': 'Matches the usual adjustment', 'Contrario al ajuste habitual': 'Opposite to the usual adjustment',
      'Sin tocar los canales relevantes': 'Relevant channels unchanged', 'Coincidió': 'Matched', 'Contrario': 'Opposite', 'Sin tocar': 'Unchanged'
    };
  }

  function currentFile() {
    const name = location.pathname.split('/').pop();
    return name || 'index.html';
  }

  function resolvePage(file) {
    let page = pages[file];
    if (page && page.alias) page = pages[page.alias];
    return page || null;
  }

  function preferredLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (supported.has(stored)) return stored;
    } catch (_) {}
    return 'es';
  }

  function saveLanguage(lang) {
    if (!supported.has(lang)) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let applying = false;

  function pageDictionary(page) {
    return Object.assign({}, common, page ? page.strings : {});
  }

  function replacePreservingWhitespace(value, replacement) {
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    return leading + replacement + trailing;
  }

  function translatedValue(dictionary, key) {
    if (dictionary[key]) return dictionary[key];
    const normalized = key.replace(/\s+/g, ' ').trim();
    if (dictionary[normalized]) return dictionary[normalized];
    const matchingKey = Object.keys(dictionary).find(candidate => candidate.replace(/\s+/g, ' ').trim() === normalized);
    if (matchingKey) return dictionary[matchingKey];
    const dynamicPatterns = [
      [/\bLiquidez\b/g, 'Cash'],
      [/\bCripto\b/g, 'Crypto'],
      [/^Ronda (\d+) de (\d+)$/, 'Round $1 of $2'],
      [/^Trimestre (\d+) \/ (\d+)$/, 'Quarter $1 / $2'],
      [/^Trimestre (\d+)$/, 'Quarter $1'],
      [/^Suma: (\d+)%\s+· lista$/, 'Total: $1% · ready'],
      [/^Suma: (\d+)%\s+· debe sumar 100%$/, 'Total: $1% · must total 100%'],
      [/^Cartera inicial:/, 'Starting portfolio:']
    ];
    let dynamic = key;
    dynamicPatterns.forEach(([pattern, replacement]) => { dynamic = dynamic.replace(pattern, replacement); });
    return dynamic !== key ? dynamic : null;
  }

  function translateTree(root, lang, dictionary) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, .vs-language-switch')) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const key = source.trim();
      const translation = translatedValue(dictionary, key);
      node.nodeValue = lang === 'en' && translation ? replacePreservingWhitespace(source, translation) : source;
    });

    root.querySelectorAll('[placeholder], [title], [aria-label], img[alt]').forEach(el => {
      if (!originalAttrs.has(el)) {
        const values = {};
        ['placeholder', 'title', 'aria-label', 'alt'].forEach(attr => {
          if (el.hasAttribute(attr)) values[attr] = el.getAttribute(attr);
        });
        originalAttrs.set(el, values);
      }
      const values = originalAttrs.get(el);
      Object.keys(values).forEach(attr => {
        const source = values[attr];
        const translation = translatedValue(dictionary, source);
        el.setAttribute(attr, lang === 'en' && translation ? translation : source);
      });
    });
  }

  function updateMetadata(lang, page) {
    if (!page) return;
    if (!page._spanishTitle) page._spanishTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && !page._spanishDescription) page._spanishDescription = meta.getAttribute('content');
    document.title = lang === 'en' && page.title ? page.title : page._spanishTitle;
    if (meta && page.description) meta.setAttribute('content', lang === 'en' ? page.description : page._spanishDescription);
  }

  function updateSwitch(lang) {
    document.querySelectorAll('.vs-language-switch button').forEach(button => {
      const active = button.dataset.vsLang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
  }

  function applyGenericLanguage(lang, page) {
    if (applying) return;
    applying = true;
    const dictionary = pageDictionary(page);
    translateTree(document.body, lang, dictionary);
    document.documentElement.lang = lang;
    updateMetadata(lang, page);
    updateSwitch(lang);
    applying = false;
  }

  function createSwitch(lang) {
    const style = document.createElement('style');
    style.textContent = '.vs-language-switch{display:flex;justify-content:center;gap:3rem;padding:1.45rem 2rem 0;border-bottom:.5px solid #2a2a2a;background:#0b0b0b}.vs-language-switch button{background:none;border:0;cursor:pointer;font-family:Montserrat,sans-serif;font-size:13px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:#7a746c;padding:0 0 1rem;border-bottom:2px solid transparent;transition:color .25s,border-color .25s}.vs-language-switch button:hover{color:#cfc8bd}.vs-language-switch button.active{color:#c9a84c;border-bottom-color:#c9a84c}@media(max-width:768px){.vs-language-switch{gap:2.2rem;padding:1.2rem 1.5rem 0}.vs-language-switch button{font-size:11px;padding-bottom:.85rem}}';
    document.head.appendChild(style);
    const switcher = document.createElement('div');
    switcher.className = 'vs-language-switch';
    switcher.setAttribute('role', 'tablist');
    switcher.setAttribute('aria-label', 'Idioma / Language');
    switcher.innerHTML = '<button type="button" data-vs-lang="es" role="tab">Español</button><button type="button" data-vs-lang="en" role="tab">English</button>';
    const topbar = document.querySelector('.topbar');
    const anchor = topbar || document.querySelector('nav');
    if (anchor) anchor.insertAdjacentElement('afterend', switcher);
    else document.body.insertAdjacentElement('afterbegin', switcher);
    switcher.addEventListener('click', event => {
      const button = event.target.closest('button[data-vs-lang]');
      if (!button) return;
      const selected = button.dataset.vsLang;
      saveLanguage(selected);
      applyGenericLanguage(selected, resolvePage(currentFile()));
    });
    updateSwitch(lang);
  }

  function existingLanguageButtons() {
    return Array.from(document.querySelectorAll('.lang-tab, .tab-btn')).filter(button => {
      const handler = button.getAttribute('onclick') || '';
      return /(?:setLang|switchTab)/.test(handler);
    });
  }

  function buttonLanguage(button) {
    if (button.id === 'tab-es' || /['"]es['"]/.test(button.getAttribute('onclick') || '')) return 'es';
    if (button.id === 'tab-en' || /['"]en['"]/.test(button.getAttribute('onclick') || '')) return 'en';
    return null;
  }

  function initExistingSelector(lang, buttons) {
    const page = resolvePage(currentFile());
    buttons.forEach(button => button.addEventListener('click', () => {
      const selected = buttonLanguage(button);
      if (selected) {
        saveLanguage(selected);
        document.documentElement.lang = selected;
        updateMetadata(selected, page);
        document.querySelectorAll('nav, footer, .naf-hero').forEach(region => translateTree(region, selected, common));
      }
    }));
    const target = buttons.find(button => buttonLanguage(button) === lang);
    if (target && !target.classList.contains('active')) target.click();
    document.documentElement.lang = lang;
    updateMetadata(lang, page);
    document.querySelectorAll('nav, footer, .naf-hero').forEach(region => translateTree(region, lang, common));
  }

  function init() {
    const lang = preferredLanguage();
    const buttons = existingLanguageButtons();
    if (buttons.length) {
      initExistingSelector(lang, buttons);
      return;
    }

    const page = resolvePage(currentFile());
    if (!page) return;
    createSwitch(lang);
    applyGenericLanguage(lang, page);

    const observer = new MutationObserver(mutations => {
      if (applying || preferredLanguage() !== 'en') return;
      applying = true;
      const dictionary = pageDictionary(page);
      mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) translateTree(node, 'en', dictionary);
        else if (node.nodeType === Node.TEXT_NODE && node.parentElement) translateTree(node.parentElement, 'en', dictionary);
      }));
      applying = false;
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
