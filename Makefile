# creates a typescript component and then renames all internal attributes
component:
	cd components && npx degit https://github.com/PolymerLabs/lit-element-starter-ts.git $(name)
	find ./ -type f -exec sed -i "s/my-element/$(name)/g" {} \;
check-makefile:
	@echo "cat -e -t -v Makefile"
