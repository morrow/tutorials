def double(input)
  # convert input to integer and double it
  return input.to_i * 2
end

# prompt user for number (we use print here instead of puts because print does not add a newline at the end)
print "Enter a number to double: "

# capture user input, strip any newline characters
number = gets.strip

# call double function to get result
result = double(number)

# output result - #{} allows us to easily call ruby code within a string (known as string interpolation).
puts "Result: #{result}"
