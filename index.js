// Access Input That Contains Repos Owner
// Access Fetch Button
// Access Element To Contains The Outputed Data
let gitInput = document.querySelector('.gitName'),
    gitBtn = document.querySelector('.gitBtn'),
    displayData = document.querySelector('.displayData')

// Fetch Data When Click On Fetch Button
gitBtn.onclick = () => {
  fetchData()
}

// Fetch Data Function
const fetchData = () => {
  // If Input Is Empty Will Attempt Me To Enter Repos Owner
  // Else Will Fetch The Data Depends On Repos Owner Name
  if(gitInput.value == ''){

    displayData.innerHTML = '<span>You Should Enter Github Firstly</span>'

  }else{

    // Fetch data
    fetch(`https://api.github.com/users/${gitInput.value}/repos`)
    .then(response => response.json())
    .then(repos=> {

      // Empty The Old Data
      displayData.innerHTML = ''

      console.log(repos)

      repos.forEach(repo => {
        // Create Repo Data Container
        let mainDiv = document.createElement('div')

        // Set Class For Repo Container
        mainDiv.setAttribute('class','mainDiv')

        // Create Repo Name Element
        let repoName = document.createElement('p')

        // Set Class For Repo Name
        repoName.setAttribute('class','repoName')

        // Create Text Node For Repo Name
        let repoNameText = document.createTextNode(repo.name)

        // Append Repo Text Node To Repo Name Elemment
        repoName.appendChild(repoNameText)

        // Append Repo Name Element To Repo Container
        mainDiv.appendChild(repoName)

        // Append Repo Container To Displayed Element
        displayData.appendChild(mainDiv)

        // Create Repo Link Element And Link Text
        let repoLink = document.createElement('a'),
            repoLinkText = document.createTextNode('Visit')

        // Append Link Text To Link Element
        repoLink.appendChild(repoLinkText)

        // Set Link Url
        repoLink.setAttribute('href' , repo.clone_url);

        // For Make Link Open In New Tab
        repoLink.setAttribute('target' , '_blank')

        // Create Repo Stars Element And Stars Text
        let repoStars = document.createElement('p'),
            repoStarsText = document.createTextNode(`Stars : ${repo.stargazers_count}`)

        // Append Stars Text To Stars Element
        repoStars.appendChild(repoStarsText)

        // Append Start Element To Repo Container
        mainDiv.appendChild(repoStars)

        // Append Repo Link To Repo Container
        mainDiv.appendChild(repoLink)

      })
    })
  }
}
