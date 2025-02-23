$(function() {

	// Register form Validations
	var $userRegister = $("#userRegister");

	$userRegister.validate({

		rules: {
			name: {
				required: true,
				lettersonly: true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNumber: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 10

			},
			password: {
				required: true,
				space: true

			},
			confirmpassword: {
				required: true,
				space: true,
				equalTo: '#pass'

			},
			address: {
				required: true,

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			},
			img: {
				required: true,
			},
			check: {
				required: true,
			}

		},
		messages: {
			name: {
				required: 'The name field is required.',
				lettersonly: 'The name should contain only alphabetic characters.'
			},
			email: {
				required: 'The email address is required.',
				space: 'Spaces are not allowed in the email address.',
				email: 'Please provide a valid email address.'
			},
			mobileNumber: {
				required: 'The mobile number is required.',
				space: 'Spaces are not allowed in the mobile number.',
				numericOnly: 'The mobile number should contain only numeric digits.',
				minlength: 'The mobile number should contain at least 10 digits.',
				maxlength: 'The mobile number should not exceed 15 digits.'
			},
			password: {
				required: 'The password field is required.',
				space: 'Spaces are not allowed in the password.'
			},
			confirmpassword: {
				required: 'The confirmation password field is required.',
				space: 'Spaces are not allowed in the confirmation password.',
				equalTo: 'The confirmation password does not match the provided password.'
			},
			address: {
				required: 'The address field is required.'
			},
			city: {
				required: 'The city field is required.',
				space: 'Spaces are not allowed in the city name.'
			},
			state: {
				required: 'The state field is required.'
			},
			pincode: {
				required: 'The pincode field is required.',
				space: 'Spaces are not allowed in the pincode.',
				numericOnly: 'The pincode should contain only numeric digits.'
			},
			img: {
				required: 'Please upload an image.'
			},
			check: {
				required: 'You must accept the terms and conditions.'
			}
		}

	})

	// reset password

	var $resetPassword = $("#resetPassword");

	$resetPassword.validate({
		rules: {
			password: {
				required: true,
				minlength: 8,
				regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
				space: true
			},
			confirmPassword: {
				required: true,
				space: true,
				equalTo: '#pass'
			}
		},
		messages: {
			password: {
				required: 'The password field is required.',
				minlength: 'The password must be at least 8 characters long.',
				regex: 'The password must contain at least one uppercase letter, one number, and one special character.',
				space: 'Spaces are not allowed in the password.'
			},
			confirmPassword: {
				required: 'The confirm password field is required.',
				space: 'Spaces are not allowed in the confirm password.',
				equalTo: 'The passwords do not match.'
			}
		}

	});



	//Category Adding Validations
	var $addCategory = $("#addCategory");

	$addCategory.validate({
		rules: {
			name: {
				required: true,
				lettersonly: true
			},
			file: {
				required: true,
			}

		},
		messages: {
			name: {
				required: 'The Category name is required.',
				lettersonly: 'The name should contain only alphabetic characters.'
			},
			file: {
				required: 'The image is required.',
			},

		}
	})


	//addProduct validations
	var $addProduct = $("#addProduct");

	$addProduct.validate({
		rules: {
			title: {
				required: true,
				maxlength: 100
			},
			description: {
				required: true,
				maxlength: 500
			},
			price: {
				required: true,
				number: true,
				min: 1
			},
			category: {
				required: true,
			},
			stock: {
				required: true,
				digits: true,
				min: 1
			},
			file: {
				required: true,
			}

		},
		messages: {
			title: {
				required: 'The product title is required.',
				maxlength: 'The title cannot exceed 100 characters.'
			},
			description: {
				required: 'The discription is required.',
				maxlength: 'The description cannot exceed 500 characters.'

			},
			price: {
				required: 'The price is required.',
				number: 'The price must be a valid number.',
				min: 'The price must be a positive value.'
			},
			stock: {
				required: 'The stock amount is required.',
				digits: 'The stock must be a whole number.',
				min: 'The stock amount must be at least 1.'
			},
			file: {
				required: 'The product image is required.',
			},
			category: {
				required: 'The product catgeory is required.',
			},

		}
	})






	// Order Validations


	var $orders = $("#orders");

	$orders.validate({
		rules: {
			firstName: {
				required: true,
				lettersonly: true
			},
			lastName: {
				required: true,
				lettersonly: true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNo: {
				required: true,
				space: true,
				numericOnly: true,
				maxlength: 10,
				minlength: 10

			},
			address: {
				required: true,

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			},
			paymentType: {
				required: true
			}
		},
		messages: {
			firstName: {
				required: 'The first name field is required.',
				lettersonly: 'The first name should contain only alphabetic characters.'
			},
			lastName: {
				required: 'The last name field is required.',
				lettersonly: 'The last name should contain only alphabetic characters.'
			},
			email: {
				required: 'The email address is required.',
				space: 'Spaces are not allowed in the email address.',
				email: 'Please provide a valid email address.'
			},
			mobileNo: {
				required: 'The mobile number is required.',
				space: 'Spaces are not allowed in the mobile number.',
				numericOnly: 'The mobile number should contain only numeric digits.',
				minlength: 'The mobile number should contain at least 10 digits.',
				maxlength: 'The mobile number should not exceed 10 digits.'
			},
			address: {
				required: 'The address field is required.'
			},
			city: {
				required: 'The city field is required.',
				space: 'Spaces are not allowed in the city name.'
			},
			state: {
				required: 'The state field is required.'
			},
			pincode: {
				required: 'The pincode field is required.',
				space: 'Spaces are not allowed in the pincode.',
				numericOnly: 'The pincode should contain only numeric digits.'
			},
			paymentType: {
				required: 'Please select a payment type.'
			}
		}

	})
	
	
	// Register form Validations
		var $addAdmin = $("#addAdmin");

		$addAdmin.validate({

			rules: {
				name: {
					required: true,
					lettersonly: true
				}
				,
				email: {
					required: true,
					space: true,
					email: true
				},
				mobileNumber: {
					required: true,
					space: true,
					numericOnly: true,
					minlength: 10,
					maxlength: 10

				},
				password: {
					required: true,
					space: true

				},
				confirmpassword: {
					required: true,
					space: true,
					equalTo: '#pass'

				},
				address: {
					required: true,

				},

				city: {
					required: true,
					space: true

				},
				state: {
					required: true,


				},
				pincode: {
					required: true,
					space: true,
					numericOnly: true

				},
				img: {
					required: true,
				},
				check: {
					required: true,
				}

			},
			messages: {
				name: {
					required: 'The name field is required.',
					lettersonly: 'The name should contain only alphabetic characters.'
				},
				email: {
					required: 'The email address is required.',
					space: 'Spaces are not allowed in the email address.',
					email: 'Please provide a valid email address.'
				},
				mobileNumber: {
					required: 'The mobile number is required.',
					space: 'Spaces are not allowed in the mobile number.',
					numericOnly: 'The mobile number should contain only numeric digits.',
					minlength: 'The mobile number should contain at least 10 digits.',
					maxlength: 'The mobile number should not exceed 15 digits.'
				},
				password: {
					required: 'The password field is required.',
					space: 'Spaces are not allowed in the password.'
				},
				confirmpassword: {
					required: 'The confirmation password field is required.',
					space: 'Spaces are not allowed in the confirmation password.',
					equalTo: 'The confirmation password does not match the provided password.'
				},
				address: {
					required: 'The address field is required.'
				},
				city: {
					required: 'The city field is required.',
					space: 'Spaces are not allowed in the city name.'
				},
				state: {
					required: 'The state field is required.'
				},
				pincode: {
					required: 'The pincode field is required.',
					space: 'Spaces are not allowed in the pincode.',
					numericOnly: 'The pincode should contain only numeric digits.'
				},
				img: {
					required: 'Please upload an image.'
				},
				check: {
					required: 'You must accept the terms and conditions.'
				}
			}

		})


})












jQuery.validator.addMethod('lettersonly', function(value, element) {
	return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
});

jQuery.validator.addMethod('space', function(value, element) {
	return /^[^-\s]+$/.test(value);
});

jQuery.validator.addMethod('all', function(value, element) {
	return /^[^-\s][a-zA-Z0-9_,.\s-]+$/.test(value);
});


jQuery.validator.addMethod('numericOnly', function(value, element) {
	return /^[0-9]+$/.test(value);
});

