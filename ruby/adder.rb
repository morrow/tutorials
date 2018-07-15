def add (a, b)
  return a.to_i + b.to_i
end

print "Enter first number: "

number = gets.strip

print "Enter second number: "

number2 = gets.strip

result = add(number, number2) # fixed code

puts "Result #{result}"
