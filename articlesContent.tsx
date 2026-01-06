import React from 'react';

export const ARTICLES_CONTENT = [
  {
    id: 1,
    tag: "Стратегия",
    title: "Как планировать год в условиях хаоса?",
    date: "12 Янв",
    slug: "strategy-2025",
    content: (
      <div className="space-y-8 text-white/80 leading-relaxed font-light">
        <p className="text-xl text-white">
          Стратегия в 2025 году — это не жесткий план на бумаге, а набор адаптивных сценариев. Мы живем в нелинейном мире, где побеждает тот, кто быстрее пересобирает свои активы. Старые модели "Plan-Fact" больше не работают.
        </p>
        
        <h3 className="text-2xl font-serif text-gold mt-8 mb-4">1. Опора на твердое: Ваши Активы</h3>
        <p>
          В периоды турбулентности единственной твердой валютой остаются отношения и репутация. Деньги могут обесцениться, рынки — закрыться, логистика — сломаться. Но телефонная книжка с прямыми контактами лиц, принимающих решения (ЛПР), работает всегда.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-gold">
            <li><strong>Команда:</strong> Люди, которые прошли с вами кризисы.</li>
            <li><strong>Клиентская база:</strong> Лояльные покупатели, которые останутся с вами.</li>
            <li><strong>Личный бренд:</strong> Доверие к вашему имени.</li>
        </ul>

        <h3 className="text-2xl font-serif text-gold mt-8 mb-4">2. Сценарное планирование</h3>
        <p>
          Мы в Club 500 используем методику трех сценариев. Для каждого у вас должен быть готов план действий ("красная папка") и, что важнее, список людей, которым вы позвоните в первую очередь.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-green-400 font-bold mb-2">Оптимистичный</div>
                <p className="text-sm">Рынок растет, открываются новые ниши. Стратегия: Агрессивный захват доли.</p>
            </div>
            <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-yellow-400 font-bold mb-2">Реалистичный</div>
                <p className="text-sm">Стагнация, высокая инфляция. Стратегия: Оптимизация костов, удержание LTV.</p>
            </div>
            <div className="bg-white/5 p-4 rounded border border-white/5">
                <div className="text-red-400 font-bold mb-2">Пессимистичный</div>
                <p className="text-sm">"Черный лебедь". Полная блокировка счетов/каналов. Стратегия: Выживание, пивот.</p>
            </div>
        </div>

        <blockquote className="border-l-4 border-gold pl-6 py-4 my-8 bg-gold/5 italic text-white/90 rounded-r-lg">
          "Хаос — это лестница, если вы знаете, куда ставить ногу. Ваша опора — это ваше окружение. В кризис слабые связи рвутся, а сильные — становятся канатами."
        </blockquote>

        <h3 className="text-2xl font-serif text-gold mt-8 mb-4">3. Личная энергия как ресурс</h3>
        <p>
          Стратег должен быть в ресурсе. Невозможно принимать решения на миллиарды, если вы не выспались, выгорели или находитесь в стрессе. Инвестиции в свое физическое и ментальное состояние — это не блажь, а часть бизнес-стратегии.
        </p>
        <p>
            Внедрите жесткие ритуалы восстановления: спорт, сон, информационный детокс. Это база вашей адекватности.
        </p>
      </div>
    )
  },
  {
    id: 2,
    tag: "Инвестиции",
    title: "5 Капиталов: Куда вкладывать время?",
    date: "05 Янв",
    slug: "5-capitals",
    content: (
      <div className="space-y-8 text-white/80 leading-relaxed font-light">
        <p className="text-xl text-white">
          Большинство предпринимателей совершают фатальную ошибку: они фокусируются только на Финансовом капитале. Но деньги — это лишь следствие, пятый элемент системы. Если вы игнорируете первые четыре, финансовый успех будет кратковременным.
        </p>
        
        <div className="space-y-8 mt-8">
          <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
            <h4 className="text-gold font-serif text-2xl mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-bold">1</span>
                Физический капитал
            </h4>
            <p>
                Ваше тело, здоровье, энергия. Это фундамент. Если у вас болит спина или нет сил встать с кровати, никакие миллиарды вам не нужны. 
                <br/><strong className="text-white">Инвестиция:</strong> Чек-ап организма, спорт, нутрициология, сон.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
            <h4 className="text-gold font-serif text-2xl mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-bold">2</span>
                Интеллектуальный капитал
            </h4>
            <p>
                Ваши знания, навыки, насмотренность. То, что невозможно отнять, даже при дефолте или эмиграции.
                <br/><strong className="text-white">Инвестиция:</strong> Обучение, книги, менторство, изучение языков.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
            <h4 className="text-gold font-serif text-2xl mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-bold">3</span>
                Социальный капитал
            </h4>
            <p>
                Ваши связи. Кто знает вас? Кого знаете вы? Какой у вас социальный индекс? Способность решить любой вопрос одним звонком.
                <br/><strong className="text-white">Инвестиция:</strong> Нетворкинг, вступление в клубы (Club 500), публичность.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
            <h4 className="text-gold font-serif text-2xl mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-bold">4</span>
                Финансовый капитал
            </h4>
            <p>
                Деньги, активы, недвижимость, бизнес. Это ресурс для масштабирования влияния.
                <br/><strong className="text-white">Инвестиция:</strong> Диверсификация, создание пассивного дохода.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
            <h4 className="text-gold font-serif text-2xl mb-3 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-sm font-bold">5</span>
                Духовный капитал
            </h4>
            <p>
                Смыслы, миссия, ценности. Зачем вы все это делаете? Что останется после вас?
                <br/><strong className="text-white">Инвестиция:</strong> Медитация, благотворительность, наставничество.
            </p>
          </div>
        </div>

        <p className="text-center italic opacity-60 mt-8 border-t border-white/10 pt-4">
            Гармоничное развитие всех 5 капиталов — ключ к антихрупкости.
        </p>
      </div>
    )
  },
  {
    id: 3,
    tag: "Нетворкинг",
    title: "Ошибки новичков в Club 500",
    date: "28 Дек",
    slug: "networking-mistakes",
    content: (
      <div className="space-y-8 text-white/80 leading-relaxed font-light">
        <p className="text-xl text-white">
          Попадая в сильное окружение, многие совершают одни и те же ошибки, которые "сжигают" их репутацию за один вечер. В премиум-сегменте нет второго шанса произвести первое впечатление. Как не стать "тем парнем с визитками"?
        </p>
        
        <h3 className="text-2xl font-serif text-gold mt-8 mb-2">Ошибка №1: Продавать "в лоб"</h3>
        <p>
          В закрытых клубах никто не любит, когда ему сразу пытаются что-то продать. Здесь покупают у тех, кому доверяют. Сначала — польза, потом — сделка.
        </p>
        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded mt-2">
            <span className="text-red-400 font-bold block mb-1">Плохо:</span>
            "Привет, я Саша, у меня маркетинговое агентство, давай я тебе лидов нагоню?"
        </div>
        <div className="bg-green-500/10 border border-green-500/30 p-4 rounded mt-2">
            <span className="text-green-400 font-bold block mb-1">Хорошо:</span>
            "Привет, я Саша. Видел твое выступление про маркетплейсы, очень крутой инсайт про логистику. У меня есть кейс в похожей нише, могу поделиться цифрами, если актуально."
        </div>

        <h3 className="text-2xl font-serif text-gold mt-8 mb-2">Ошибка №2: Потребительская позиция</h3>
        <p>
          Заходя в коммуникацию с запросом "дай контакт", "помоги", "подскажи", "инвестируй", вы создаете дисбаланс. Вы становитесь "вампиром" энергии. Заходите с вопросом: "Чем я могу быть полезен тебе прямо сейчас?".
        </p>

        <h3 className="text-2xl font-serif text-gold mt-8 mb-2">Ошибка №3: Нарушение субординации</h3>
        <p>
          Панибратство, нарушение личных границ, неуместные шутки. Даже если атмосфера в клубе дружеская, сохраняйте уважение к статусу собеседника. Не перебивайте, слушайте больше, чем говорите.
        </p>

        <h3 className="text-2xl font-serif text-gold mt-8 mb-2">Ошибка №4: Отсутствие Follow-up</h3>
        <p>
          Вы познакомились, обменялись контактами и... пропали. Контакт "остывает" за 24 часа.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Напишите в мессенджер сразу после встречи.</li>
            <li>Прикрепите фото (селфи), чтобы вас запомнили.</li>
            <li>Выполните обещание (скинуть презентацию/книгу) в течение суток.</li>
        </ul>

        <h3 className="text-2xl font-serif text-gold mt-8 mb-2">Ошибка №5: Быть "не в контексте"</h3>
        <p>
          Приходить на встречу неподготовленным. Если вы идете на ужин с конкретным спикером — изучите его биографию, бизнес, последние интервью. Задавайте глубокие вопросы, а не те, что есть в Википедии.
        </p>
      </div>
    )
  }
];