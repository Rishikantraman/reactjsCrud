import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const UseStyles = makeStyles((theme) => ({
  bgRed: {
    background: "#1d7dea",
    height: "100vh",
  },
  loginCard: {
    background: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12)",
    borderRadius: 4,
  },
  leftPanel: {
    background: "#ff4460",
    padding: "130px 20px 20px 20px",
    borderRadius: "4px 0 0 4px",
    textAlign: "center",
    "& p": {
      fontSize: 25,
      textAlign: "center",
      color: "#fff",
      margin: "0 0 10px 0",
    },
    "& span": {
      fontSize: 16,
      color: "#fff",
    },
  },
  rightPanel: {
    padding: 20,
    "& .MuiTextField-root": {
      marginBottom: 15,
    },
  },
  forgotPass: {
    textAlign: "right",
    "& a": {
      color: "#9e9e9e",
      textDecoration: "none",
      "&>:hover": {
        textDecoration: "none",
      },
    },
  },
  cta: {
    textAlign: "center",
    marginTop: 25,
  },
  switch: {
    textAlign: "center",
    color: "#9e9e9e",
    fontSize: 16,
    marginTop: 15,
    "& a": {
      color: "#1d7dea",
      fontWeight: 600,
      textDecoration: "none",
      marginLeft: 10,
    },
  },
}));
function Login(props) {
  const classes = UseStyles();
  const [loginBox, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_no, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setCPassword] = useState("");
  const history = useHistory();

  const signIn = () => {
    fetch("http://127.0.0.1:8000/api/v1/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((result) => {
      result.json().then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.data[0]));
        if (res.data[0]) {
          history.push("/dashboard");
        } else {
          alert("login failed");
        }
      });
    });
  };

  const signUp = () => {
    fetch(" http://127.0.0.1:8000/api/v1/register", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        mobile_no: mobile_no,
        password: password,
        confirm_password: confirm_password,
      }),
    }).then((result) => {
      result.json().then((res) => {
        localStorage.setItem("auth",JSON.stringify(res.data[0]));
        if(res.data[0]){
          history.push("/dashboard");
        }
        else{
          alert("Signup Failed");
        }
      })
    });
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.bgRed}
    >
      <Grid item={12}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid container className={classes.loginCard}>
            <Grid item xs={12} md={6} className={classes.leftPanel}>
              <p>React Material Login Form</p>
              <span>Lorem ipsum, or lipsum as it is sometimes known</span>
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightPanel}>
              {loginBox && (
                <Grid className={classes.login}>
                  <h1>Login</h1>
                  <Grid>
                    <TextField
                      placeholder="Email"
                      variant="outlined"
                      fullWidth="true"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      placeholder="Password"
                      variant="outlined"
                      fullWidth="true"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid className={classes.forgotPass}>
                    <a href="javascript:void(0)">Forgot your password?</a>
                  </Grid>
                  <Grid className={classes.cta}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={signIn}
                    >
                      Login
                    </Button>
                    <Grid className={classes.switch}>
                      Don't have an account
                      <a
                        href="javascript:void(0)"
                        onClick={() => setLogin(false)}
                      >
                        SignUp
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              )}
              {!loginBox && (
                <Grid className={classes.signUp}>
                  <h1>Signup</h1>
                  <Grid>
                    <TextField
                      placeholder="Name"
                      variant="outlined"
                      fullWidth="true"
                      onChange = {(e) =>  setName(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      placeholder="Email"
                      variant="outlined"
                      fullWidth="true"
                      onChange = {(e) =>  setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      placeholder="Mobile Number"
                      variant="outlined"
                      fullWidth="true"
                      onChange = {(e) =>  setMobile(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      placeholder="Password"
                      variant="outlined"
                      fullWidth="true"
                      onChange = {(e) =>  setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      placeholder="Confirm Password"
                      variant="outlined"
                      fullWidth="true"
                      onChange = {(e) =>  setCPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid className={classes.cta}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={signUp}
                    >
                      Signup
                    </Button>
                    <Grid className={classes.switch}>
                      Already an account
                      <a
                        href="javascript:void(0)"
                        onClick={() => setLogin(true)}
                      >
                        SignIn
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Login;
