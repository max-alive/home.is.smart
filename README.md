## _Всем привет. Перед манипуляциями с интерфейсом, прочтите, пожалуйста, мануал [ниже](#руководство-по-эксплуатации)_.
## Глава для тех кому интересна цель и результаты проекта. 

Данный проект является ни чем иным как панелью для управления Умным Домом. Но он не связан ни с каким реальным домом или с реальными функционирующими устройствами. 

Этот проект лишь пользовательский интерфейс, так сказать только клиентская часть, целью создания которой было развить свои навыки вёрстки и написания js для управления ей в условиях коммерческого продукта с дружественным для пользователя интерфейсом, используя только стандартный стек технологий(vanilla JS, Html и Css). 

Главное задачей было развить свои способности написания достаточно объемного проекта как для такого стека, без использования средств для упрощения достижения определённых требований. В их числе фреймворки и сторонние библиотеки, готовые ui-компоненты.
### Итого:
Проект действительно написан, но писался он в разные промежутки времени, поэтому некоторые вещи не совсем написаны используя _Best Practices_. Кроме рефакторинга, также не стал исправлять все в единый _Code Style_, не все оптимизировано. 

И ещё недоработан список для устройств и их перемещение как избранных сценариев, по причине того, что это важный момент - __реализации механизма одного устройства__. 

Цель поставленная частично выполнена, но JS вышел слишком большой :cry:. И не учитывались принципы _Graceful Degradation_. 

Но несмотря на это, всё протестировано на десктопной версии и в мобильном Яндекс.браузере и всё то, что реализовано, выглядит, так сказать, user-friendly и симпатично, а главное все работоспособно и функционально завершено (кроме блока устройств). 

В заключении был разработан интерфейс по современным тенденциям внешнего вида и интерактивности в виде логичности механизма перемещения блоков или переходов с анимацией и т.д. Но для коммерческого запуска нужно ещё доработать. 

## Руководство по эксплуатации.

Проект выложен на GitHub Pages: 
https://maxaliev.github.io/home.is.smart/public/

Работоспособен как на экранах от 600px так и до 1300px(во всем диапазоне - можно увидеть через инструменты разработчика). Layout написан на `flexbox`. Проверенные на полную поддержку браузеры:
1. Web Chrome
2. Web Mozilla
3. Mobile IOS Yandex.Browser

### Особенности реализации:
- В мобильной версии выпадающее меню при нажатии на 'burger' (3 прямые). 
- Основная часть страницы разделена на 3 блока: 
 1. Главное
 2. Сценарии
 3. Устройства
- Главное служит непосредственно для сводки основной информации о состоянии Дома и список ближайших запланированных сценариев. Он   листается в десктопной версии за счёт __колесика мыши__, а в мобильной - с помощью touch-действий, что достигается за счёт _drag&drop_ событий.

- Сценарии - это просто информативные блоки. Они реализованы в виде `inline-blocks`. За счёт чего мы можем листать их с помощью клавиш в виде стрелок справа, достигая таким образом колоночности, при которой если блок не помещается в виду занятости мест другими блоками, он переезжает на другую страницу. Таким образом в десктопе по 9, 1200px - 6, 850 - 3. 

К сожалению, пока нет конструктора сценариев, чтобы пользователь мог сам создавать необходимые ему сценарии.

В мобильной версии листаются также как и сценарии блока Главное, с помощью _drag&drop_. Здесь получился большой JS, так как написаны были функции для обработки события для каждого сценария, без использования `Promise`, что вылилось в использовании повторяющегося кода и `callbacks`. 

- Устройства - суть этого блока в управлением состоянием различных устройств. Достигается это за счёт вращения или перемещения регуляторов управления. При нажатии на устройство, хочу предупредить __РЕАЛИЗОВАНО ТОЛЬКО 1 САМОЕ ЛЕВОЕ УСТРОЙСТВО__, выплывает popup прямо из места нажатия и центрируется по вертикали и горизонтали. 

На остальной документ в это время наложен блок с состоянием `position: fixed`, темным цветом фона и на сам документ наложен - `filter: 
blur(5px)`. Что позволяет запретить взаимодействие с документом во время открытого модального окна. 

Далее круговой ползунок можно соответственно вращать. Он из себя представляет наложенные друг на друга `svg` элементы, написанные на html. И логика их проявления и увядания написана на js. 
На десктопе нужно:
1. Нажать на ползунок.
2. Навести курсором на нужную цифру.
3. Нажать снова для фиксации значения.

Все значения видны на счетчиках модального окна. После чего нажать клавишу 'ПРИМЕНИТЬ' и модальное окно закроектся.

В мобильной версии:
1. Нажать и не отпуская палец провести по кругу до нужного значения.
2. Отвести палец и нажать применить.

Как можно легко убедиться в мобильной версии многие вещи упрощены и сделаны мельче.
Также для модального окна были побеждены 2 проблемы IOS - `svg` имело blur-эффект и был устранен вертикальный скролл при тач-действии на документ во время открытого модального окна.

## Заключение и планы на будующее.

Проект вышел достойный, очень интересный, хорошего внешнего вида и логики поведения элементов. 

Но недостаточный в плане отсутствия необходимого пользователю функционала, всего 1 устройство, нет ни одной причины пользователю использовать мое web-приложение на данном этапе. 

Но если его польностью дореализовать, то в будующем эту панель можно будет использовать для управления поведением реальным Умным Домом, естественно реализовав серверную логику.

- [ ] Реализовать линейные регуляторы для всех устройств в списке.
- [ ] Перемещение устройств как сценариев.
- [ ] Дописать сам список для разделения устройств по категориям.
- [ ] Написать конструктор для создания сценариев непосредственно самим пользователем.
- [ ] Сделать связь между сценариями и блоком Главное, добавив возможность активировать сценарии, после чего они будут попадать в Главное.
- [ ] Выдавать оповещение при наступлении начала выполнения сценария.
