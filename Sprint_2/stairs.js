/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.

*/

const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825];
const monday = [8865, 7773, 6643, 5843, 7290, 8476, 6752, 6711, 5469, 7512, 7313, 9514, 6637, 8492, 7495, 5917, 6674, 5254, 8797, 7833, 9027, 6149, 5935, 7001, 5309, 6867, 6880, 8096, 6710, 7737, 7233, 7231, 7613, 8581, 6369, 8347, 5297, 7974, 9784, 8047, 9607, 9971, 8819, 6973, 5428, 5196, 8125, 9492, 6973, 6531, 9800, 5252];
const tuesday = [9175, 8716, 8094, 7665, 6509, 9125, 8597, 6434, 9312, 6656, 9325, 8855, 8043, 9712, 6778, 6940, 9334, 7571, 6901, 7287, 6483, 6076, 6881, 9731, 5862, 9819, 7777, 8750, 9236, 5744, 9810, 8935, 7326, 7917, 8350, 5881, 8644, 6183, 9421, 5889, 8314, 7722, 9321, 6241, 8295, 9795, 6992, 6031, 8198, 9273, 7338, 6634];
const wednesday = [8646, 6945, 6361, 9425, 6878, 5765, 8343, 8832, 6051, 6911, 8014, 9394, 6092, 8664, 6362, 7160, 7354, 9605, 6662, 8747, 5842, 5464, 5785, 5669, 5591, 5618, 7182, 5433, 9621, 5910, 5233, 9034, 7454, 6923, 7176, 9354, 9160, 8027, 7520, 6943, 6688, 7164, 6088, 5984, 6096, 9715, 7312, 9254, 6675, 8734, 6285, 7021];
const thursday = [6350, 6802, 7865, 8972, 7478, 9441, 8575, 6530, 7311, 6043, 9243, 9942, 7967, 6393, 9770, 5816, 7148, 7777, 5920, 6469, 7341, 6534, 8875, 6203, 9603, 9513, 6406, 7281, 9096, 6604, 6346, 8692, 8299, 6539, 9523, 8645, 8161, 6495, 8942, 6249, 7672, 7457, 6983, 8654, 9121, 8912, 7334, 8965, 7972, 6107, 9887, 7443];
const friday = [7036, 9252, 8022, 8802, 8681, 6443, 8043, 9624, 9716, 6755, 9729, 7934, 9166, 9946, 6975, 9413, 9044, 9285, 7253, 7012, 9702, 9773, 6496, 8154, 7930, 9763, 7567, 6647, 8232, 7774, 9311, 8095, 9516, 9721, 9232, 9844, 8570, 9093, 7200, 8363, 9910, 9986, 6526, 7444, 9379, 7527, 7962, 6674, 9975, 5682, 8916, 6622];
const saturday = [5056, 7167, 9055, 7644, 5921, 5061, 9765, 8643, 5182, 9151, 5867, 6095, 9870, 7421, 9332, 8017, 9455, 5664, 7752, 7544, 9483, 9760, 7037, 5767, 6434, 7752, 6226, 9720, 6032, 9873, 6981, 9655, 7512, 6493, 6285, 6308, 8793, 8183, 9301, 5795, 7572, 9663, 8159, 7106, 7867, 8885, 7621, 5341, 6273, 7127, 7116, 6713];

const stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

const yearlyTotal = stairs.flat().reduce((sum, n) => sum + n, 0);
const estimate20Years = yearlyTotal * 20;

console.log(estimate20Years);
