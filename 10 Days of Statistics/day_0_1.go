/*
  Created on Mon Jun 05 13:43 2023

  @author: Dmitry White
*/

package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

/*
  TODO: Given an array, X, of N integers and an array, W,
  representing the respective weights of X's elements,
  calculate and print the weighted mean of 's elements.
  Your answer should be rounded to a scale of 1 decimal place.

  Theory

  Weighted Mean = sum(Xi * Wi) / sum(Wi)
*/

func calcWeightedMean(n int, x []int, w []int) float64 {
	nominator := 0.0
	denominator := 0.0
	for i, v := range w {
		nominator += float64(v) * float64(x[i])
		denominator += float64(v)
	}

	return nominator / denominator
}

func parseInts(str string) []int {
	x := []int{}
	for _, v := range strings.Split(str, " ") {
		num, err := strconv.Atoi(v)
		if err != nil {
			log.Fatalln("X element is not correct")
		}
		x = append(x, num)
	}
	return x
}

func readInput() (int, []int, []int) {
	arr := []string{}
	scanner := bufio.NewScanner(os.Stdin)
	for {
		scanner.Scan()
		text := scanner.Text()
		if len(text) != 0 {
			arr = append(arr, text)
		} else {
			break
		}
	}

	n, err := strconv.Atoi(arr[0])
	if err != nil {
		log.Fatalln("N is not correct")
	}

	x := parseInts(arr[1])

	w := parseInts(arr[2])

	return n, x, w
}

func weightedMean() {
	n, x, w := readInput()

	mean := calcWeightedMean(n, x, w)
	fmt.Printf("%.1f\n", mean)
}

func main() {
	weightedMean()
}
