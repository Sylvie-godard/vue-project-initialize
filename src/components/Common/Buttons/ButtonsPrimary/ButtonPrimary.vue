<template>
    <button class="ButtonPrimary">En savoir plus</button>
</template>

<style lang="scss">
.ButtonPrimary {
    background-color: white;
    border: 2px solid black;
    color: black;
    cursor: pointer;
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #eeae6e;
        color: white;
    }
}
</style>