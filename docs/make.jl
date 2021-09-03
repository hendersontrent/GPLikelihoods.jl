using Documenter, GPLikelihoods

makedocs(;
    modules=[GPLikelihoods],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
    ],
    repo="https://github.com/JuliaGaussianProcesses/GPLikelihoods.jl/blob/{commit}{path}#L{line}",
    sitename="GPLikelihoods.jl",
    authors="willtebbutt <wt0881@my.bristol.ac.uk>",
    assets=String[],
)

deploydocs(;
    repo="github.com/JuliaGaussianProcesses/GPLikelihoods.jl",
    push_preview=true,
)
