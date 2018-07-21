export function FunctionWithDependency(dependency, parameter)
{
    let calculationResult = dependency(parameter);

    return calculationResult + 5;
}