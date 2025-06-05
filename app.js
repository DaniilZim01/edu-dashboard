// Создаем Vue приложение
const { createApp } = Vue

createApp({
    data() {
        return {
            currentTab: 'overview',
            filters: {
                dateType: 'enrollment',
                startDate: null,
                endDate: null,
                userSegment: [],
                course: [],
                educationType: [],
                owner: [],
                enrollmentType: [],
                grade: [],
                recommendationSource: []
            },
            courses: [
                { id: 1, name: 'Курс 1' },
                { id: 2, name: 'Курс 2' }
            ],
            organizations: [
                { id: 1, name: 'Организация 1' },
                { id: 2, name: 'Организация 2' }
            ],
            grades: ['A', 'B', 'C', 'D'],
            tabs: [
                { id: 'overview', name: 'Общий обзор', icon: 'fas fa-chart-line' },
                { id: 'operational', name: 'Операционная эффективность', icon: 'fas fa-tachometer-alt' },
                { id: 'engagement', name: 'Вовлеченность', icon: 'fas fa-users' }
            ],
            // Данные для общего обзора
            overviewData: {
                // Данные для воронки
                funnel: [
                    { stage: 'Записи на курс', value: 10000, conversion: 100 },
                    { stage: 'Начали курс', value: 7500, conversion: 75 },
                    { stage: 'Завершили курс', value: 5000, conversion: 50 }
                ],
                // Данные для MAU
                mau: {
                    current: 25000,
                    mom: 12.5,
                    history: [
                        { month: 'Янв', value: 18000 },
                        { month: 'Фев', value: 19500 },
                        { month: 'Мар', value: 21000 },
                        { month: 'Апр', value: 22500 },
                        { month: 'Май', value: 23500 },
                        { month: 'Июн', value: 25000 }
                    ]
                },
                // Данные для коэффициента удержания
                stickyFactor: {
                    current: 65,
                    mom: 5.2,
                    history: [
                        { month: 'Янв', value: 55 },
                        { month: 'Фев', value: 58 },
                        { month: 'Мар', value: 60 },
                        { month: 'Апр', value: 62 },
                        { month: 'Май', value: 64 },
                        { month: 'Июн', value: 65 }
                    ]
                },
                // Данные для CSAT учеников
                studentCSAT: {
                    current: 85,
                    mom: 2.5,
                    history: [
                        { month: 'Янв', value: 80 },
                        { month: 'Фев', value: 81 },
                        { month: 'Мар', value: 82 },
                        { month: 'Апр', value: 83 },
                        { month: 'Май', value: 84 },
                        { month: 'Июн', value: 85 }
                    ]
                },
                // Данные для CSAT преподавателей
                teacherCSAT: {
                    current: 88,
                    mom: 1.8,
                    history: [
                        { month: 'Янв', value: 85 },
                        { month: 'Фев', value: 86 },
                        { month: 'Мар', value: 86 },
                        { month: 'Апр', value: 87 },
                        { month: 'Май', value: 87 },
                        { month: 'Июн', value: 88 }
                    ]
                }
            },
            // Данные для операционной эффективности
            operationalData: {
                // CSAT детальный
                detailedCSAT: {
                    editors: [
                        { month: 'Янв', value: 82 },
                        { month: 'Фев', value: 83 },
                        { month: 'Мар', value: 84 },
                        { month: 'Апр', value: 85 },
                        { month: 'Май', value: 86 },
                        { month: 'Июн', value: 87 }
                    ],
                    teachers: [
                        { month: 'Янв', value: 85 },
                        { month: 'Фев', value: 86 },
                        { month: 'Мар', value: 86 },
                        { month: 'Апр', value: 87 },
                        { month: 'Май', value: 88 },
                        { month: 'Июн', value: 89 }
                    ]
                },
                // Время создания учебного курса
                courseCreationTime: {
                    current: 14,
                    mom: -12.5,
                    history: [
                        { month: 'Янв', value: 20 },
                        { month: 'Фев', value: 18 },
                        { month: 'Мар', value: 17 },
                        { month: 'Апр', value: 16 },
                        { month: 'Май', value: 15 },
                        { month: 'Июн', value: 14 }
                    ]
                },
                // Количество учеников на 1 преподавателя
                studentsPerTeacher: {
                    internal: [
                        { month: 'Янв', value: 25 },
                        { month: 'Фев', value: 28 },
                        { month: 'Мар', value: 30 },
                        { month: 'Апр', value: 32 },
                        { month: 'Май', value: 35 },
                        { month: 'Июн', value: 38 }
                    ],
                    external: [
                        { month: 'Янв', value: 15 },
                        { month: 'Фев', value: 16 },
                        { month: 'Мар', value: 18 },
                        { month: 'Апр', value: 20 },
                        { month: 'Май', value: 22 },
                        { month: 'Июн', value: 25 }
                    ]
                },
                // Количество ручных действий
                manualActions: {
                    current: 3,
                    mom: -25,
                    history: [
                        { month: 'Янв', value: 5 },
                        { month: 'Фев', value: 4 },
                        { month: 'Мар', value: 4 },
                        { month: 'Апр', value: 3 },
                        { month: 'Май', value: 3 },
                        { month: 'Июн', value: 3 }
                    ]
                }
            },
            // Данные для вовлеченности
            engagementData: {
                // Детальная конверсия
                conversion: [
                    { stage: 'Назначено обучение → Завершил обучение', value: 5000, conversion: 50 },
                    { stage: 'Сам записался → Завершил обучение', value: 4500, conversion: 45 },
                    { stage: 'Назначено обучение → Приступил', value: 8000, conversion: 80 },
                    { stage: 'Сам записался → Приступил', value: 7500, conversion: 75 },
                    { stage: 'Приступил → Завершил обучение', value: 6000, conversion: 60 }
                ],
                // Retention
                retention: {
                    platform: [
                        { month: 'Янв', value: 65 },
                        { month: 'Фев', value: 68 },
                        { month: 'Мар', value: 70 },
                        { month: 'Апр', value: 72 },
                        { month: 'Май', value: 75 },
                        { month: 'Июн', value: 78 }
                    ],
                    tools: [
                        { month: 'Янв', value: 55 },
                        { month: 'Фев', value: 58 },
                        { month: 'Мар', value: 60 },
                        { month: 'Апр', value: 62 },
                        { month: 'Май', value: 65 },
                        { month: 'Июн', value: 68 }
                    ],
                    bot: [
                        { month: 'Янв', value: 45 },
                        { month: 'Фев', value: 48 },
                        { month: 'Мар', value: 50 },
                        { month: 'Апр', value: 52 },
                        { month: 'Май', value: 55 },
                        { month: 'Июн', value: 58 }
                    ]
                },
                // Конверсия по каналам
                conversionChannels: {
                    catalog: [
                        { month: 'Янв', value: 25 },
                        { month: 'Фев', value: 28 },
                        { month: 'Мар', value: 30 },
                        { month: 'Апр', value: 32 },
                        { month: 'Май', value: 35 },
                        { month: 'Июн', value: 38 }
                    ],
                    grady: [
                        { month: 'Янв', value: 20 },
                        { month: 'Фев', value: 22 },
                        { month: 'Мар', value: 25 },
                        { month: 'Апр', value: 27 },
                        { month: 'Май', value: 30 },
                        { month: 'Июн', value: 32 }
                    ],
                    recSystem: [
                        { month: 'Янв', value: 15 },
                        { month: 'Фев', value: 18 },
                        { month: 'Мар', value: 20 },
                        { month: 'Апр', value: 22 },
                        { month: 'Май', value: 25 },
                        { month: 'Июн', value: 28 }
                    ],
                    landing: [
                        { month: 'Янв', value: 30 },
                        { month: 'Фев', value: 32 },
                        { month: 'Мар', value: 35 },
                        { month: 'Апр', value: 37 },
                        { month: 'Май', value: 40 },
                        { month: 'Июн', value: 42 }
                    ],
                    system: [
                        { month: 'Янв', value: 35 },
                        { month: 'Фев', value: 38 },
                        { month: 'Мар', value: 40 },
                        { month: 'Апр', value: 42 },
                        { month: 'Май', value: 45 },
                        { month: 'Июн', value: 48 }
                    ]
                },
                // Успешность рекомендаций
                recommendations: {
                    courseCompletion: [
                        { month: 'Янв', value: 75 },
                        { month: 'Фев', value: 78 },
                        { month: 'Мар', value: 80 },
                        { month: 'Апр', value: 82 },
                        { month: 'Май', value: 85 },
                        { month: 'Июн', value: 88 }
                    ],
                    userEngagement: [
                        { month: 'Янв', value: 65 },
                        { month: 'Фев', value: 68 },
                        { month: 'Мар', value: 70 },
                        { month: 'Апр', value: 72 },
                        { month: 'Май', value: 75 },
                        { month: 'Июн', value: 78 }
                    ],
                    satisfaction: [
                        { month: 'Янв', value: 85 },
                        { month: 'Фев', value: 87 },
                        { month: 'Мар', value: 88 },
                        { month: 'Апр', value: 89 },
                        { month: 'Май', value: 90 },
                        { month: 'Июн', value: 92 }
                    ]
                }
            }
        }
    },
    mounted() {
        this.createOverviewCharts()
        this.createOperationalCharts()
        this.createEngagementCharts()
    },
    methods: {
        formatNumber(num) {
            return new Intl.NumberFormat('ru-RU').format(num)
        },
        createOverviewCharts() {
            this.createFunnelCharts()
            this.createMAUChart()
            this.createStickyFactorChart()
            this.createStudentCSATChart()
            this.createTeacherCSATChart()
        },
        createOperationalCharts() {
            this.createDetailedCSATChart()
            this.createCourseCreationChart()
            this.createStudentsPerTeacherChart()
            this.createManualActionsChart()
        },
        createEngagementCharts() {
            this.createRetentionChart()
            this.createConversionChannelsChart()
            this.createRecommendationsChart()
        },
        createFunnelCharts() {
            this.createFunnelAbsoluteChart()
            this.createFunnelConversionChart()
        },
        createFunnelAbsoluteChart() {
            const margin = { top: 20, right: 100, bottom: 30, left: 100 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#funnel-absolute-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left + width},${margin.top})`)

            const y = d3.scaleBand()
                .range([0, height])
                .domain(this.overviewData.funnel.map(d => d.stage))
                .padding(0.3)

            const x = d3.scaleLinear()
                .range([0, width])
                .domain([0, d3.max(this.overviewData.funnel, d => d.value)])

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisBottom(x)
                    .tickSize(-height)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            // Добавляем значения слева
            svg.selectAll('.value-left')
                .data(this.overviewData.funnel)
                .enter()
                .append('text')
                .attr('class', 'value-left')
                .attr('x', d => -x(d.value))
                .attr('y', d => y(d.stage) + y.bandwidth() / 2)
                .attr('dy', '0.35em')
                .text(d => this.formatNumber(d.value))

            // Добавляем столбцы с анимацией
            const bars = svg.selectAll('.bar')
                .data(this.overviewData.funnel)
                .enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', d => -x(d.value))
                .attr('y', d => y(d.stage))
                .attr('width', 0)
                .attr('height', y.bandwidth())
                .attr('fill', '#1FA8C9')

            // Анимация появления столбцов
            bars.transition()
                .duration(1000)
                .delay((d, i) => i * 200)
                .attr('width', d => x(d.value))

            // Добавляем подписи этапов
            svg.selectAll('.stage-label')
                .data(this.overviewData.funnel)
                .enter()
                .append('text')
                .attr('class', 'stage-label')
                .attr('x', d => -x(d.value) / 2)
                .attr('y', d => y(d.stage) + y.bandwidth() / 2)
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(d => d.stage)
        },
        createFunnelConversionChart() {
            const margin = { top: 20, right: 100, bottom: 30, left: 100 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#funnel-conversion-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const y = d3.scaleBand()
                .range([0, height])
                .domain(this.overviewData.funnel.map(d => d.stage))
                .padding(0.3)

            const x = d3.scaleLinear()
                .range([0, width])
                .domain([0, 100])

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisBottom(x)
                    .tickSize(-height)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            // Добавляем значения справа
            svg.selectAll('.value-right')
                .data(this.overviewData.funnel)
                .enter()
                .append('text')
                .attr('class', 'value-right')
                .attr('x', d => x(d.conversion))
                .attr('y', d => y(d.stage) + y.bandwidth() / 2)
                .attr('dy', '0.35em')
                .text(d => d.conversion + '%')

            // Добавляем столбцы с анимацией
            const bars = svg.selectAll('.bar')
                .data(this.overviewData.funnel)
                .enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', 0)
                .attr('y', d => y(d.stage))
                .attr('width', 0)
                .attr('height', y.bandwidth())
                .attr('fill', '#1FA8C9')

            // Анимация появления столбцов
            bars.transition()
                .duration(1000)
                .delay((d, i) => i * 200)
                .attr('width', d => x(d.conversion))

            // Добавляем подписи этапов
            svg.selectAll('.stage-label')
                .data(this.overviewData.funnel)
                .enter()
                .append('text')
                .attr('class', 'stage-label')
                .attr('x', d => x(d.conversion) / 2)
                .attr('y', d => y(d.stage) + y.bandwidth() / 2)
                .attr('dy', '0.35em')
                .attr('text-anchor', 'middle')
                .text(d => d.stage)
        },
        createMAUChart() {
            this.createLineChart('mau-chart', this.overviewData.mau.history, 'Активные пользователи')
        },
        createStickyFactorChart() {
            this.createLineChart('sticky-factor-chart', this.overviewData.stickyFactor.history, 'Коэффициент удержания')
        },
        createStudentCSATChart() {
            this.createLineChart('student-csat-chart', this.overviewData.studentCSAT.history, 'CSAT учеников')
        },
        createTeacherCSATChart() {
            this.createLineChart('teacher-csat-chart', this.overviewData.teacherCSAT.history, 'CSAT преподавателей')
        },
        createLineChart(containerId, data, title) {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select(`#${containerId}`)
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(d => d.month))
                .padding(0.1)

            const y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, d3.max(data, d => d.value) * 1.1])

            // Добавляем оси
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .call(g => g.select('.domain').remove())

            svg.append('g')
                .call(d3.axisLeft(y))
                .call(g => g.select('.domain').remove())

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            const line = d3.line()
                .x(d => x(d.month) + x.bandwidth() / 2)
                .y(d => y(d.value))
                .curve(d3.curveMonotoneX)

            // Добавляем линию с анимацией
            const path = svg.append('path')
                .datum(data)
                .attr('class', 'line')
                .attr('fill', 'none')
                .attr('stroke', '#1FA8C9')
                .attr('stroke-width', 2)
                .attr('stroke-dasharray', function() {
                    return this.getTotalLength()
                })
                .attr('stroke-dashoffset', function() {
                    return this.getTotalLength()
                })
                .attr('d', line)

            // Анимация линии
            path.transition()
                .duration(1000)
                .attr('stroke-dashoffset', 0)

            // Добавляем точки с анимацией
            const dots = svg.selectAll('.dot')
                .data(data)
                .enter()
                .append('circle')
                .attr('class', 'dot')
                .attr('cx', d => x(d.month) + x.bandwidth() / 2)
                .attr('cy', d => y(d.value))
                .attr('r', 0)
                .attr('fill', '#1FA8C9')
                .attr('stroke', 'white')
                .attr('stroke-width', 2)

            // Анимация появления точек
            dots.transition()
                .duration(500)
                .delay((d, i) => i * 100)
                .attr('r', 4)

            // Добавляем тултипы
            dots.append('title')
                .text(d => `${d.month}: ${d.value}`)
        },
        createDetailedCSATChart() {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#detailed-csat-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const x = d3.scaleBand()
                .range([0, width])
                .domain(this.operationalData.detailedCSAT.editors.map(d => d.month))
                .padding(0.1)

            const y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, 100])

            // Добавляем оси
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .call(g => g.select('.domain').remove())

            svg.append('g')
                .call(d3.axisLeft(y))
                .call(g => g.select('.domain').remove())

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            // Создаем линии для каждого типа CSAT
            const line = d3.line()
                .x(d => x(d.month) + x.bandwidth() / 2)
                .y(d => y(d.value))
                .curve(d3.curveMonotoneX)

            const csatTypes = [
                { data: this.operationalData.detailedCSAT.editors, color: '#1FA8C9', name: 'Редакторы' },
                { data: this.operationalData.detailedCSAT.teachers, color: '#36B37E', name: 'Преподаватели' }
            ]

            // Добавляем линии и точки
            csatTypes.forEach(type => {
                // Линия с анимацией
                const path = svg.append('path')
                    .datum(type.data)
                    .attr('class', 'line')
                    .attr('fill', 'none')
                    .attr('stroke', type.color)
                    .attr('stroke-width', 2)
                    .attr('stroke-dasharray', function() {
                        return this.getTotalLength()
                    })
                    .attr('stroke-dashoffset', function() {
                        return this.getTotalLength()
                    })
                    .attr('d', line)

                // Анимация линии
                path.transition()
                    .duration(1000)
                    .attr('stroke-dashoffset', 0)

                // Точки с анимацией
                const dots = svg.selectAll(`.${type.name.toLowerCase()}-dot`)
                    .data(type.data)
                    .enter()
                    .append('circle')
                    .attr('class', `${type.name.toLowerCase()}-dot`)
                    .attr('cx', d => x(d.month) + x.bandwidth() / 2)
                    .attr('cy', d => y(d.value))
                    .attr('r', 0)
                    .attr('fill', type.color)
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)

                // Анимация появления точек
                dots.transition()
                    .duration(500)
                    .delay((d, i) => i * 100)
                    .attr('r', 4)

                // Добавляем тултипы
                dots.append('title')
                    .text(d => `${type.name}: ${d.value}%`)
            })

            // Добавляем легенду
            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width - 150}, 0)`)

            csatTypes.forEach((type, i) => {
                const legendItem = legend.append('g')
                    .attr('transform', `translate(0, ${i * 25})`)
                    .style('cursor', 'pointer')
                    .on('mouseover', function() {
                        svg.selectAll(`.${type.name.toLowerCase()}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 6)
                    })
                    .on('mouseout', function() {
                        svg.selectAll(`.${type.name.toLowerCase()}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 4)
                    })

                legendItem.append('line')
                    .attr('x1', 0)
                    .attr('y1', 0)
                    .attr('x2', 20)
                    .attr('y2', 0)
                    .attr('stroke', type.color)
                    .attr('stroke-width', 2)

                legendItem.append('text')
                    .attr('x', 30)
                    .attr('y', 4)
                    .text(type.name)
            })
        },
        createCourseCreationChart() {
            this.createLineChart(
                'course-creation-chart',
                this.operationalData.courseCreationTime.history,
                'Время создания курса (дней)'
            )
        },
        createStudentsPerTeacherChart() {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#students-per-teacher-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const x = d3.scaleBand()
                .range([0, width])
                .domain(this.operationalData.studentsPerTeacher.internal.map(d => d.month))
                .padding(0.1)

            const y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, d3.max([
                    ...this.operationalData.studentsPerTeacher.internal,
                    ...this.operationalData.studentsPerTeacher.external
                ], d => d.value) * 1.1])

            // Добавляем оси
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .call(g => g.select('.domain').remove())

            svg.append('g')
                .call(d3.axisLeft(y))
                .call(g => g.select('.domain').remove())

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            // Создаем линии для каждого типа
            const line = d3.line()
                .x(d => x(d.month) + x.bandwidth() / 2)
                .y(d => y(d.value))
                .curve(d3.curveMonotoneX)

            const teacherTypes = [
                { data: this.operationalData.studentsPerTeacher.internal, color: '#1FA8C9', name: 'Внутренние преподаватели' },
                { data: this.operationalData.studentsPerTeacher.external, color: '#36B37E', name: 'Внешние преподаватели' }
            ]

            // Добавляем линии и точки
            teacherTypes.forEach(type => {
                // Линия с анимацией
                const path = svg.append('path')
                    .datum(type.data)
                    .attr('class', 'line')
                    .attr('fill', 'none')
                    .attr('stroke', type.color)
                    .attr('stroke-width', 2)
                    .attr('stroke-dasharray', function() {
                        return this.getTotalLength()
                    })
                    .attr('stroke-dashoffset', function() {
                        return this.getTotalLength()
                    })
                    .attr('d', line)

                // Анимация линии
                path.transition()
                    .duration(1000)
                    .attr('stroke-dashoffset', 0)

                // Точки с анимацией
                const dots = svg.selectAll(`.${type.name.toLowerCase().replace(' ', '-')}-dot`)
                    .data(type.data)
                    .enter()
                    .append('circle')
                    .attr('class', `${type.name.toLowerCase().replace(' ', '-')}-dot`)
                    .attr('cx', d => x(d.month) + x.bandwidth() / 2)
                    .attr('cy', d => y(d.value))
                    .attr('r', 0)
                    .attr('fill', type.color)
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)

                // Анимация появления точек
                dots.transition()
                    .duration(500)
                    .delay((d, i) => i * 100)
                    .attr('r', 4)

                // Добавляем тултипы
                dots.append('title')
                    .text(d => `${type.name}: ${d.value}`)
            })

            // Добавляем легенду
            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width - 150}, 0)`)

            teacherTypes.forEach((type, i) => {
                const legendItem = legend.append('g')
                    .attr('transform', `translate(0, ${i * 25})`)
                    .style('cursor', 'pointer')
                    .on('mouseover', function() {
                        svg.selectAll(`.${type.name.toLowerCase().replace(' ', '-')}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 6)
                    })
                    .on('mouseout', function() {
                        svg.selectAll(`.${type.name.toLowerCase().replace(' ', '-')}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 4)
                    })

                legendItem.append('line')
                    .attr('x1', 0)
                    .attr('y1', 0)
                    .attr('x2', 20)
                    .attr('y2', 0)
                    .attr('stroke', type.color)
                    .attr('stroke-width', 2)

                legendItem.append('text')
                    .attr('x', 30)
                    .attr('y', 4)
                    .text(type.name)
            })
        },
        createManualActionsChart() {
            this.createLineChart(
                'manual-actions-chart',
                this.operationalData.manualActions.history,
                'Количество ручных действий'
            )
        },
        createRetentionChart() {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#retention-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const x = d3.scaleBand()
                .range([0, width])
                .domain(this.engagementData.retention.platform.map(d => d.month))
                .padding(0.1)

            const y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, 100])

            // Добавляем оси
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .call(g => g.select('.domain').remove())

            svg.append('g')
                .call(d3.axisLeft(y))
                .call(g => g.select('.domain').remove())

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            const retentionTypes = [
                { data: this.engagementData.retention.platform, color: '#1FA8C9', name: 'Платформа' },
                { data: this.engagementData.retention.tools, color: '#36B37E', name: 'Инструменты' },
                { data: this.engagementData.retention.bot, color: '#FF5630', name: 'Бот' }
            ]

            // Создаем группы для каждого типа
            const groups = svg.selectAll('.retention-group')
                .data(retentionTypes)
                .enter()
                .append('g')
                .attr('class', 'retention-group')

            // Добавляем столбцы
            groups.each(function(type) {
                const group = d3.select(this)
                const barWidth = x.bandwidth() / retentionTypes.length

                group.selectAll('.bar')
                    .data(type.data)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('x', d => x(d.month) + (retentionTypes.indexOf(type) * barWidth))
                    .attr('y', d => y(d.value))
                    .attr('width', barWidth)
                    .attr('height', 0)
                    .attr('fill', type.color)
                    .attr('rx', 4)
                    .attr('ry', 4)
                    .transition()
                    .duration(500)
                    .delay((d, i) => i * 100)
                    .attr('height', d => height - y(d.value))

                // Добавляем значения над столбцами
                group.selectAll('.value')
                    .data(type.data)
                    .enter()
                    .append('text')
                    .attr('class', 'value')
                    .attr('x', d => x(d.month) + (retentionTypes.indexOf(type) * barWidth) + barWidth / 2)
                    .attr('y', d => y(d.value) - 5)
                    .attr('text-anchor', 'middle')
                    .text(d => d.value + '%')
                    .style('opacity', 0)
                    .transition()
                    .duration(500)
                    .delay((d, i) => i * 100)
                    .style('opacity', 1)
            })

            // Добавляем легенду
            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width - 150}, 0)`)

            retentionTypes.forEach((type, i) => {
                const legendItem = legend.append('g')
                    .attr('transform', `translate(0, ${i * 25})`)
                    .style('cursor', 'pointer')

                legendItem.append('rect')
                    .attr('width', 20)
                    .attr('height', 20)
                    .attr('fill', type.color)
                    .attr('rx', 4)
                    .attr('ry', 4)

                legendItem.append('text')
                    .attr('x', 30)
                    .attr('y', 15)
                    .text(type.name)
            })
        },
        createConversionChannelsChart() {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#conversion-channels-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const x = d3.scaleBand()
                .range([0, width])
                .domain(this.engagementData.conversionChannels.catalog.map(d => d.month))
                .padding(0.1)

            const y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, 50])

            // Добавляем оси
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .call(g => g.select('.domain').remove())

            svg.append('g')
                .call(d3.axisLeft(y))
                .call(g => g.select('.domain').remove())

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            // Создаем линии для каждого канала
            const line = d3.line()
                .x(d => x(d.month) + x.bandwidth() / 2)
                .y(d => y(d.value))
                .curve(d3.curveMonotoneX)

            const channels = [
                { data: this.engagementData.conversionChannels.catalog, color: '#1FA8C9', name: 'Каталог' },
                { data: this.engagementData.conversionChannels.grady, color: '#36B37E', name: 'Грейди' },
                { data: this.engagementData.conversionChannels.recSystem, color: '#FF5630', name: 'Рек. система' },
                { data: this.engagementData.conversionChannels.landing, color: '#FFAB00', name: 'Лендинг' },
                { data: this.engagementData.conversionChannels.system, color: '#6554C0', name: 'Система' }
            ]

            // Добавляем линии и точки
            channels.forEach(channel => {
                // Линия
                svg.append('path')
                    .datum(channel.data)
                    .attr('fill', 'none')
                    .attr('stroke', channel.color)
                    .attr('stroke-width', 2)
                    .attr('d', line)

                // Точки с анимацией
                const dots = svg.selectAll(`.${channel.name.toLowerCase().replace(' ', '-')}-dot`)
                    .data(channel.data)
                    .enter()
                    .append('circle')
                    .attr('class', `${channel.name.toLowerCase().replace(' ', '-')}-dot`)
                    .attr('cx', d => x(d.month) + x.bandwidth() / 2)
                    .attr('cy', d => y(d.value))
                    .attr('r', 0)
                    .attr('fill', channel.color)
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)

                // Анимация появления точек
                dots.transition()
                    .duration(500)
                    .delay((d, i) => i * 100)
                    .attr('r', 4)

                // Добавляем тултипы
                dots.append('title')
                    .text(d => `${channel.name}: ${d.value}%`)
            })

            // Добавляем легенду
            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width - 150}, 0)`)

            channels.forEach((channel, i) => {
                const legendItem = legend.append('g')
                    .attr('transform', `translate(0, ${i * 25})`)
                    .style('cursor', 'pointer')
                    .on('mouseover', function() {
                        svg.selectAll(`.${channel.name.toLowerCase().replace(' ', '-')}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 6)
                    })
                    .on('mouseout', function() {
                        svg.selectAll(`.${channel.name.toLowerCase().replace(' ', '-')}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 4)
                    })

                legendItem.append('line')
                    .attr('x1', 0)
                    .attr('y1', 0)
                    .attr('x2', 20)
                    .attr('y2', 0)
                    .attr('stroke', channel.color)
                    .attr('stroke-width', 2)

                legendItem.append('text')
                    .attr('x', 30)
                    .attr('y', 4)
                    .text(channel.name)
            })
        },
        createRecommendationsChart() {
            const margin = { top: 20, right: 30, bottom: 30, left: 40 }
            const width = 600 - margin.left - margin.right
            const height = 400 - margin.top - margin.bottom

            const svg = d3.select('#recommendations-chart')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)

            const x = d3.scaleBand()
                .range([0, width])
                .domain(this.engagementData.recommendations.courseCompletion.map(d => d.month))
                .padding(0.1)

            const y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, 100])

            // Добавляем оси
            svg.append('g')
                .attr('transform', `translate(0,${height})`)
                .call(d3.axisBottom(x))
                .call(g => g.select('.domain').remove())

            svg.append('g')
                .call(d3.axisLeft(y))
                .call(g => g.select('.domain').remove())

            // Добавляем сетку
            svg.append('g')
                .attr('class', 'grid')
                .call(d3.axisLeft(y)
                    .tickSize(-width)
                    .tickFormat('')
                )
                .style('stroke', '#DFE1E6')
                .style('stroke-opacity', 0.5)

            // Создаем линии для каждого типа рекомендаций
            const line = d3.line()
                .x(d => x(d.month) + x.bandwidth() / 2)
                .y(d => y(d.value))
                .curve(d3.curveMonotoneX)

            const metrics = [
                { data: this.engagementData.recommendations.courseCompletion, color: '#1FA8C9', name: 'Завершение курса' },
                { data: this.engagementData.recommendations.userEngagement, color: '#36B37E', name: 'Вовлеченность' },
                { data: this.engagementData.recommendations.satisfaction, color: '#FF5630', name: 'Удовлетворенность' }
            ]

            // Добавляем линии и точки
            metrics.forEach(metric => {
                // Линия
                svg.append('path')
                    .datum(metric.data)
                    .attr('fill', 'none')
                    .attr('stroke', metric.color)
                    .attr('stroke-width', 2)
                    .attr('d', line)

                // Точки с анимацией
                const dots = svg.selectAll(`.${metric.name.toLowerCase().replace(' ', '-')}-dot`)
                    .data(metric.data)
                    .enter()
                    .append('circle')
                    .attr('class', `${metric.name.toLowerCase().replace(' ', '-')}-dot`)
                    .attr('cx', d => x(d.month) + x.bandwidth() / 2)
                    .attr('cy', d => y(d.value))
                    .attr('r', 0)
                    .attr('fill', metric.color)
                    .attr('stroke', 'white')
                    .attr('stroke-width', 2)

                // Анимация появления точек
                dots.transition()
                    .duration(500)
                    .delay((d, i) => i * 100)
                    .attr('r', 4)

                // Добавляем тултипы
                dots.append('title')
                    .text(d => `${metric.name}: ${d.value}%`)
            })

            // Добавляем легенду
            const legend = svg.append('g')
                .attr('class', 'legend')
                .attr('transform', `translate(${width - 150}, 0)`)

            metrics.forEach((metric, i) => {
                const legendItem = legend.append('g')
                    .attr('transform', `translate(0, ${i * 25})`)
                    .style('cursor', 'pointer')
                    .on('mouseover', function() {
                        svg.selectAll(`.${metric.name.toLowerCase().replace(' ', '-')}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 6)
                    })
                    .on('mouseout', function() {
                        svg.selectAll(`.${metric.name.toLowerCase().replace(' ', '-')}-dot`)
                            .transition()
                            .duration(200)
                            .attr('r', 4)
                    })

                legendItem.append('line')
                    .attr('x1', 0)
                    .attr('y1', 0)
                    .attr('x2', 20)
                    .attr('y2', 0)
                    .attr('stroke', metric.color)
                    .attr('stroke-width', 2)

                legendItem.append('text')
                    .attr('x', 30)
                    .attr('y', 4)
                    .text(metric.name)
            })
        },
        applyFilters() {
            // Здесь будет логика применения фильтров
            console.log('Applying filters:', this.filters)
        },
        resetFilters() {
            this.filters = {
                dateType: 'enrollment',
                startDate: null,
                endDate: null,
                userSegment: [],
                course: [],
                educationType: [],
                owner: [],
                enrollmentType: [],
                grade: [],
                recommendationSource: []
            }
        }
    }
}).mount('#app') 