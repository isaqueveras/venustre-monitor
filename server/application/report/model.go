package report

type ChartHistogram struct {
	Labels   []string  `json:"labels"`
	Datasets []Dataset `json:"datasets"`
}

type Dataset struct {
	Label string    `json:"label"`
	Data  []float64 `json:"data"`
	Color string    `json:"color"`
}

type Indicators struct {
	Data []Indicator `json:"data"`
}

type Indicator struct {
	Name  string      `json:"name"`
	Desc  string      `json:"desc"`
	Value interface{} `json:"value"`
}
