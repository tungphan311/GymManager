package db

import (
	"log"
	"os"

	pg "github.com/go-pg/pg"
)

func Connect() *pg.DB {
	opt := &pg.Options{
		User:     "postgres",
		Password: "password",
		Addr:     "localhost:5432",
	}

	var db *pg.DB = pg.Connect(opt)

	if db == nil {
		log.Printf("Failed to connect database. \n")
		os.Exit(100)
	}

	log.Printf("Connected to database! \n")

	CreateUserTable(db)

	// closeErr := db.Close()
	// if closeErr != nil {
	// 	log.Printf("Error while closing database, reason: %v\n", closeErr)
	// 	os.Exit(100)
	// }

	// log.Printf("Close databse successfully. \n")
	return db
}
