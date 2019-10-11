SWITCH error {

    CASE "fsevent":
        sudo npm cache clean -f --force
        sudo npm install -g n
        sudo n 8.11.3
        sudo npm install react-x-editable

    CASE ".dezalgo.DELETE":

    DEFAULT:
        npm install || sudo npm install
}