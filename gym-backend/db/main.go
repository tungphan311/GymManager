package db

import (
	"log"
	"os"

	pg "github.com/go-pg/pg"
)

func Connect() {
	opt := &pg.Options{
		User:     "vj",
		Password: "vjvj",
		Addr:     "localhost:5432",
	}

	var db *pg.DB = pg.Connect(opt)

	if db == nil {
		log.Printf("Failed to connect database. \n")
		os.Exit(100)
	}

	log.Printf("Connected to database! \n")

	closeErr := db.Close()
	if closeErr != nil {
		log.Printf("Error while closing database, reason: %v\n", closeErr)
		os.Exit(100)
	}

	log.Printf("Close databse successfully. \n")
	return
}
