package db

type User struct {
	tableName struct{} `sql:"user_collection"`
	ID        int      `sql:"id,pk"`
	Username  string   `sql:"username,unique"`
	Password  string   `sql:"password"`
	Role      string   `sql:"role"`
	IsActive  bool     `sql:"is_active"`
}

func CreateUserTable() error {

}
