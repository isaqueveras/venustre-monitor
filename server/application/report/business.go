package report

import (
	"context"
	"fmt"
	"math/rand"

	"github.com/google/uuid"

	"github.com/isaqueveras/outis-dashboard/server/database"
	"github.com/isaqueveras/outis-dashboard/server/infrastructure/report"
	"github.com/isaqueveras/outis-dashboard/server/utils"
)

func GetHistograms(ctx context.Context, rid uuid.UUID) (res *ChartHistogram, err error) {
	tx, err := database.NewTx(ctx)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback()

	repo := report.New(tx)
	chart, err := repo.GetHistograms(rid)
	if err != nil {
		return nil, err
	}

	res = new(ChartHistogram)
	res.Labels = chart.Labels
	for idx := range chart.Datasets {
		res.Datasets = append(res.Datasets, Dataset{
			Label: chart.Datasets[idx].Label,
			Data:  chart.Datasets[idx].Data,
			Color: utils.Colors[idx],
		})
	}

	return res, nil
}

func GetIndicators(ctx context.Context, rid uuid.UUID) (res *Indicators, err error) {
	res = &Indicators{
		Data: []Indicator{
			{
				Name:  "Total requests",
				Desc:  "Overall sum of count",
				Value: fmt.Sprintf("%.2f", rand.Float64()),
			},
			{
				Name:  "Error requests",
				Desc:  "Overall sum of count",
				Value: fmt.Sprintf("%.2f", rand.Float64()),
			},
			{
				Name:  "Average latency",
				Desc:  "General average of count",
				Value: fmt.Sprintf("%.2fms", rand.Float64()),
			},
			{
				Name:  "Error percentage",
				Desc:  "Overall error percentage",
				Value: fmt.Sprintf("%.2f", rand.Float64()) + "%",
			},
			{
				Name:  "Average latency",
				Desc:  "General average of count",
				Value: fmt.Sprintf("%.2fms", rand.Float64()),
			},
		},
	}

	return res, nil
}
