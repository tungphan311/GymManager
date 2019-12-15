package db

import (
	"log"

	pg "github.com/go-pg/pg"
	orm "github.com/go-pg/pg/orm"
)

type User struct {
	tableName struct{} `sql:"user_collection"`
	ID        int      `sql:"id,pk"`
	Username  string   `sql:"username,unique"`
	Password  string   `sql:"password"`
	Role      string   `sql:"role"`
	IsActive  bool     `sql:"is_active"`
}

func CreateUserTable(db *pg.DB) error {
	opt := &orm.CreateTableOptions{
		IfNotExists: true,
	}

	createErr := db.CreateTable(&User{}, opt)

	if createErr != nil {
		log.Printf("Error while creating table User, reason: %v\n", createErr)
		return createErr
	}

	log.Printf("Table User create successfully \n")
	return nil
}

func (us *User) Add(db *pg.DB) error {
	insertErr := db.Insert(us)

	if insertErr != nil {
		log.Printf("Error while inserting new user into DB, reason: %v\n", insertErr)
		return insertErr
	}

	log.Printf("User %s inserted successfully \n", us.Username)
	return nil
}
