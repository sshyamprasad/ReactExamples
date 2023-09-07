import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import solveSudoku from "./Sodoku";
import { Table } from "react-bootstrap";
const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
    // N is the size of the 2D matrix N*N
    let N = 9;
    // let grid = [
    //   [3, 0, 6, 5, 0, 8, 4, 0, 0],
    //   [5, 2, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 8, 7, 0, 0, 0, 0, 3, 1],
    //   [0, 0, 3, 0, 1, 0, 0, 8, 0],
    //   [9, 0, 0, 8, 6, 3, 0, 0, 5],
    //   [0, 5, 0, 0, 9, 0, 6, 0, 0],
    //   [1, 3, 0, 0, 0, 0, 2, 5, 0],
    //   [0, 0, 0, 0, 0, 0, 0, 7, 4],
    //   [0, 0, 5, 2, 0, 6, 3, 0, 0],
    // ];
  // const [grid1, setGrid1] = useState(
  //   Array.from({ length: 9 }, () => Array(9).fill(""))
  // );
  const [grid, setGrid] = useState([
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ]);
  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };
  const handleSolveSudoku = ()=> {
    let Solved = solveSudoku(grid, 0, 0);
    console.log(Solved);
    setGrid((prevState)=> Solved);
    console.log(grid);
    // console.log(grid)
  }
  useEffect(()=>{
    console.log("rendered");
  },[grid])
  const Button = styled.button`
    color: #bf4f74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
  `;



  // function print(grid) {
  //   document.write("solution exists");
  //   for (let i = 0; i < N; i++) {
  //     for (let j = 0; j < N; j++) document.write(grid[i][j] + " ");

  //     document.write("<br>");
  //   }
  // }

  // if (solveSudoku(grid, 0, 0))
  // useEffect(() => {
  //   let ret = solveSudoku(grid, 0, 0);
  //   setMat(ret);
  // }, [mat]);

  // console.log(ret);
  // if (ret) //print(ret);
  // else document.write("no solution exists ");
  return (
    <div id="container">
      <div className="box" tabIndex="-1">
        <h1>LoginForm </h1>
      </div>
      <div>

          {/* <div className="box">
            {" "}
            <label for="userid">User Name</label>
            <input
              type="text"
              id="userid"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
          </div>
          <div className="box">
            {" "}
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="box">
            <hr />
            <Button $primary>Login</Button>
            <a href="">forgot password</a>
          </div> */}
          <Table bordered>
            <tbody>
              {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cellValue, colIndex) => (
                    <td key={colIndex}>
                      <input
                        type="number"
                        value={cellValue}
                        min="0"
                        max="9"
                        onChange={(e) =>
                          handleCellChange(rowIndex, colIndex, e.target.value)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
          <Button style={{}} onClick={handleSolveSudoku}>Solve</Button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default LoginForm;
