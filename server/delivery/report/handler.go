package report

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"github.com/isaqueveras/outis-dashboard/server/application/report"
)

func getHistograms(ctx *gin.Context) {
	rid, err := uuid.Parse(ctx.Param("rid"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, map[string]string{"msg": err.Error()})
		return
	}

	res, err := report.GetHistograms(ctx, rid)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, map[string]string{"msg": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, res)
}

func getIndicators(ctx *gin.Context) {
	rid, err := uuid.Parse(ctx.Param("rid"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, map[string]string{"msg": err.Error()})
		return
	}

	res, err := report.GetIndicators(ctx, rid)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, map[string]string{"msg": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, res)
}
