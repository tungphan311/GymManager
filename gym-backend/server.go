package main

import (
	"net/http"

	db "./db"
	pg "github.com/go-pg/pg"

	"github.com/labstack/echo"
)

func main() {
	db.Connect()

	e := echo.New()
	e.POST("/login", login)
	e.Logger.Fatal(e.Start(":1323"))
}

func login(c echo.Context) error {
	// User ID from path `users/:id`
	id := c.Param("id")
	return c.String(http.StatusOK, id)
}

func AddUser(dbRef *pg.DB) {
	newUser := &db.User{
		Username: "staff",
		Password: "admin",
		Role:     "admin",
		IsActive: false,
	}

	newUser.Add(dbRef)
}
